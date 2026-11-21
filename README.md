# Engine 1 — Data & Integrity (Member 1)

## Purpose
Owns everything about **how data is stored, shaped, validated and kept trustworthy**: the MongoDB schemas, database connection, input validation, error handling, the appliance product catalog and its images, and uploaded files.

## Contents
| Path | What it does |
|---|---|
| `server/models/User.js` | User schema (name, email, hashed password, role) |
| `server/models/Appliance.js` | Appliance + embedded repair-record schema; enums for condition, warranty, repair status/type, decision status |
| `server/config/db.js` | MongoDB / Mongoose connection (graceful failure if DB is offline) |
| `server/middleware/validationMiddleware.js` | Validates appliance input (required fields, purchase year 1980–current year) |
| `server/middleware/errorHandler.js` | Central error handler |
| `server/uploads/` | Stored appliance photos uploaded by users |
| `client/src/data/applianceCatalogData.js` | Catalog of 44 products (brand, model, price, specs) used by Search & Ranking |
| `client/src/data/appliancesData.js` | Supported categories / static appliance data |
| `client/src/utils/formatCurrency.js` | INR currency formatting (₹1,25,000 style) |
| `client/public/images/products/` | Product photos for the catalog |
| `server/scripts/` | Catalog tooling: `audit_catalog_images.js`, `enrich_catalog_specs.mjs`, `verify_catalog_summary.mjs`, `download_*_photos.mjs`, `find_images.mjs`, `fetch_product_image.mjs` |
| `.env.example` | Environment variable template |

## Integrity rules enforced
- Required fields: name, category, purchase year, purchase price
- Purchase year must be between 1980 and the current year
- Repair cost cannot be negative; repair status limited to Completed / Scheduled / In Progress
- Condition, warranty and decision fields restricted to fixed enums
- Image uploads restricted to JPG/PNG/WEBP, max 5 MB
- Every record is bound to a `userId` (data isolation between users)

## Interfaces with other engines
- Engine 2 imports `models/Appliance.js` to read/write appliances and repairs.
- Engine 3 routes use `validationMiddleware.js` / `errorHandler.js`; the UI reads `applianceCatalogData.js`.
- Engine 4 tests the schemas, catalog and validation rules.

---

## Project
**AI-Assisted Appliance Repair & Replacement Decision Support System** — Final-Year BCA Project (Theme 3: Search and Ranking System).
Stack: React 18 + Vite (client) · Node.js + Express (server) · MongoDB + Mongoose · JWT auth.

## How the 4 engines fit together
| Engine | Owner | Responsibility |
|---|---|---|
| Engine 1 | Member 1 | Data & Integrity |
| Engine 2 | Member 2 | Logic & Rule |
| Engine 3 | Member 3 | Interface & Access |
| Engine 4 | Member 4 | Testing & Validation |

To run the **complete** application, extract all 4 zips into one folder and merge them (the folder structure `client/` and `server/` is identical in every zip, so merging just combines files). Then:

```bash
cd server && npm install        # backend deps
cd ../client && npm install     # frontend deps
# create server/.env  ->  PORT=5000, MONGODB_URI=mongodb://127.0.0.1:27017/appliance_decision_db, JWT_SECRET=<your secret>, CLIENT_URL=http://localhost:5173
cd server && npm start          # API on :5000
cd client && npm run dev        # UI on :5173
```
> `.env` is intentionally NOT included in the zips (it contains secrets). Use `.env.example` as a template.
