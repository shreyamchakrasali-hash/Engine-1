import fs from 'fs';
import path from 'path';
import sharp from '../node_modules/sharp/lib/index.js';

const NEW_PHOTOS_TO_FETCH = {
  // Microwave Ovens (4)
  'mw-samsung-combi21': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/258691_0_cpl0wn.png',
  'mw-lg-mc2846': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/196953_0_vggiic.png',
  'mw-ifb-23bc4': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/192274_0_yeuowd.png',
  'mw-panasonic-nnct64': 'https://store.in.panasonic.com/media/catalog/product/cache/b11e74dacaf724c92618cd828f5b816b/a/r/artboard-1_76.jpg',

  // Water Heaters (4)
  'wh-bajaj-shaktipro': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Geysers/Images/316230_0_WH7ESih4re.png',
  'wh-havells-adonia': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Geysers/Images/211251_0_i3ynek.png',
  'wh-racold-omnis': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Geysers/Images/273664_0_yor6cr.png',
  'wh-aosmith-xpress': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Geysers/Images/243921_0_voya7h.png',

  // Televisions (3 new - Sony already on disk)
  'tv-samsung-crystal55': 'https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/306173_0_rnfxvm.png',
  'tv-lg-ur75': 'https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/315793_0_8cn_QtjFI.png',
  'tv-tcl-v6c': 'https://media.tatacroma.com/Croma%20Assets/Entertainment/Television/Images/315756_0_bETvNFssF.png',

  // Ceiling Fans (4)
  'cf-havells-stealth': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Fans/Images/304599_0_tkvsy6.png',
  'cf-crompton-hyperjet': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Fans/Images/300154_0_kaagkp.png',
  'cf-orient-zeno': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Fans/Images/317172_0_ujZV-V7iO.png',
  'cf-atomberg-renesa': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Fans/Images/307348_erhzlz.png',

  // Mixer Grinders (3 new - Bosch already on disk)
  'mg-preethi-zodiac': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/230149_0_rvrkuk.png',
  'mg-philips-hr7000': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Food%20Processors/Images/322665_0_TtLmZDa6t.png',
  'mg-sujata-dynamix': 'https://cdn.moglix.com/p/gZHno7zNlDmnr-xxlarge.jpg',

  // Vacuum Cleaners (3 new - Dyson already on disk)
  'vc-philips-fc9352': 'https://cdn.moglix.com/p/yQvJGQ8BwCfUZ-xxlarge.jpg',
  'vc-eureka-maxxvac': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Vacuum%20Cleaners/Images/244454_0_UD3rYkYMT.png',
  'vc-karcher-wd3': 'https://cdn.moglix.com/product/hd-images/r3JcOe6R0OD80.jpg',

  // Electric Ovens (4)
  'eo-lg-mjen286': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/311642_0_39umMbKDn.png',
  'eo-samsung-baker28': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Geysers/Images/268936_0_anocnb.png',
  'eo-ifb-30brc2': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/207314_0_ryy0yp.png',
  'eo-bosch-series4': 'https://media.tatacroma.com/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/319458_0_AVJeze-19.png'
};

async function downloadAll() {
  console.log(`Downloading ${Object.keys(NEW_PHOTOS_TO_FETCH).length} real manufactured product photos...`);
  const clientDir = path.resolve('client/public/images/products');
  const rootDir = path.resolve('public/images/products');
  fs.mkdirSync(clientDir, { recursive: true });
  fs.mkdirSync(rootDir, { recursive: true });

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const [id, url] of Object.entries(NEW_PHOTOS_TO_FETCH)) {
    const clientPath = path.join(clientDir, `${id}.jpg`);
    const rootPath = path.join(rootDir, `${id}.jpg`);

    if (fs.existsSync(clientPath) && fs.statSync(clientPath).size > 1000) {
      if (!fs.existsSync(rootPath)) {
        fs.copyFileSync(clientPath, rootPath);
      }
      console.log(`[ALREADY ON DISK] ${id}.jpg`);
      skipped++;
      continue;
    }

    try {
      console.log(`[FETCHING] ${id} from ${url.slice(0, 60)}...`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      });

      if (!res.ok) {
        console.error(`[FAIL] ${id}: HTTP ${res.status}`);
        failed++;
        continue;
      }

      const ab = await res.arrayBuffer();
      const buf = Buffer.from(ab);

      const processed = await sharp(buf)
        .resize(800, 600, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .jpeg({ quality: 90 })
        .toBuffer();

      fs.writeFileSync(clientPath, processed);
      fs.writeFileSync(rootPath, processed);

      console.log(`[SAVED REAL PHOTO] ${id}.jpg (${processed.length} bytes)`);
      success++;
    } catch (e) {
      console.error(`[ERROR] ${id}:`, e.message);
      failed++;
    }
  }

  console.log(`\nFinal result: ${success} downloaded, ${skipped} already present, ${failed} failed.`);
}

downloadAll().catch(console.error);
