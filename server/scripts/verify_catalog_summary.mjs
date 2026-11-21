import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catalogUrl = pathToFileURL(path.resolve(__dirname, '../../client/src/data/applianceCatalogData.js')).href;
const { APPLIANCE_CATALOG, ALL_CATEGORIES } = await import(catalogUrl);

const categories = ALL_CATEGORIES.filter(c => c !== 'All');
console.log('Categories count:', categories.length);

let total = 0;
let missing = 0;
categories.forEach((cat, idx) => {
  const items = APPLIANCE_CATALOG.filter(p => p.category === cat);
  console.log(`\n[${idx + 1}] Category: ${cat} (${items.length} items)`);
  items.forEach(p => {
    total++;
    const clientPath = path.resolve(__dirname, '../../client/public', p.image.replace(/^\//, ''));
    const exists = fs.existsSync(clientPath);
    if (!exists) missing++;
    const size = exists ? fs.statSync(clientPath).size : -1;
    console.log(`  - Brand: ${p.brand.padEnd(16)} | Model: ${p.name.slice(0, 36).padEnd(36)} | Exists: ${exists} | Size: ${size} B`);
  });
});
console.log(`\n========================================`);
console.log(`Total verified products: ${total}`);
console.log(`Present: ${total - missing}`);
console.log(`Missing: ${missing}`);
console.log(`========================================`);
