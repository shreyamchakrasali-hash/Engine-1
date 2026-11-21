import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../..');

async function audit() {
  const catalogUrl = pathToFileURL(path.join(rootDir, 'client/src/data/applianceCatalogData.js')).href;
  const catalogModule = await import(catalogUrl);
  const catalog = catalogModule.APPLIANCE_CATALOG || catalogModule.applianceCatalog || catalogModule.default || [];
  console.log(`Total catalog items: ${catalog.length}`);

  const missing = [];
  const present = [];

  for (const item of catalog) {
    const imgRel = item.image.startsWith('/') ? item.image.slice(1) : item.image;
    const clientPath = path.join(rootDir, 'client/public', imgRel);
    const rootPath = path.join(rootDir, 'public', imgRel);

    const clientOk = fs.existsSync(clientPath);
    const rootOk = fs.existsSync(rootPath);

    if (clientOk && rootOk) {
      present.push({ id: item.id, name: item.name, brand: item.brand, category: item.category, img: item.image });
    } else {
      missing.push({ id: item.id, name: item.name, brand: item.brand, category: item.category, img: item.image, clientOk, rootOk });
    }
  }

  console.log(`Present on disk: ${present.length}`);
  console.log(`Missing on disk: ${missing.length}`);
  if (missing.length > 0) {
    console.log('\n--- MISSING ITEMS ---');
    missing.forEach(m => {
      console.log(`[${m.category}] ${m.brand} - ${m.name} -> ${m.img}`);
    });
  }
}

audit().catch(console.error);
