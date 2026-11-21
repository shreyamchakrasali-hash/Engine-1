import fs from 'fs';
import path from 'path';
import sharp from '../node_modules/sharp/lib/index.js';

// Clean white background studio photo download script
const REAL_IMAGE_SOURCES = {
  // Washing Machines
  'wm-samsung-ww80t': 'https://images.samsung.com/is/image/samsung/p6pim/in/ww80t504dax1tl/gallery/in-front-loading-washer-ww10t534daws1-374541-ww80t504dax1tl-553084208?$624_624_PNG$',
  'wm-samsung-wa65a': 'https://images.samsung.com/is/image/samsung/p6pim/in/wa65a4002vs-tl/gallery/in-top-loading-wa65a4002gstl-wa65a4002vs-tl-479462614?$624_624_PNG$',
  'wm-lg-fhm1408': 'https://mc.bajajfinserv.in/media/catalog/product/l/g/lgfhm1408bdwwhite_base.jpeg',
  'wm-lg-t70sks': 'https://cdn1.jiomartjcp.com/v2/catalog-cloud/ccprod/original/products/assets/item/free/original/6Y9VCPWQXQn-LG-T70SKSFZ-Washing-Machine-491902817-i-11-1200Wx1200H.jpeg',
  'wm-whirlpool-360bw': 'https://whirlpoolindia.vtexassets.com/arquivos/ids/170314/1.png.png',
  'wm-bosch-wat284': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA01865088_WAT28469IN_def.webp',
  'wm-ifb-senator': 'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:3d5f8815-fa48-47b8-a773-50cc3b800588/as/8903287033377-.webp?quality=60',
  'wm-haier-hw80': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dryers/Images/247473_0_nrrvaf.png',
  'wm-godrej-wteon': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Washers%20And%20Dryers/Images/320092_0_RL0dl1A0g.png',
  'wm-panasonic-naf70': 'https://panasonic.scene7.com/is/image/Panasonic/ast-2717664?fmt=png-alpha&wid=613&hei=460',

  // Refrigerators
  'ref-samsung-rf28t': 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/rf28t5001sr-aa/gallery/latin-en-ref-rf28t5001sr-rf28t5001sr-aa-530563195?$1164_776_PNG$',
  'ref-lg-glt432': 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=400,height=400,quality=75,format=auto/product/lg-437-l-frost-free-double-door-2-star-refrigerator-shiny-steel-gl-t432apzy-01.png',
  'ref-whirlpool-ifpro355': 'https://whirlpoolindia.vtexassets.com/arquivos/ids/171475-800-auto?v=638846994735570000&width=800&height=auto&aspect=true',
  'ref-godrej-rteon260': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/243384_0_jqlmt3.png',
  'ref-haier-hrb550': 'https://5.imimg.com/data5/SELLER/Default/2023/8/333368985/RV/MR/YR/2929021/531-litres-inverter-french-door-refrigerator-500x500.jpg',
  'ref-bosch-kgn56': 'https://media3.bsh-group.com/Product_Shots/5120x/13477702_KGN56XI40I_STP_def.webp',
  'ref-panasonic-nrbg343': 'https://cdn.moglix.com/p/DeZXRLsbLObRi-xxlarge.jpg',

  // Dishwashers
  'dw-bosch-sms66': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA02680218_i7966_2030031_SMS66GI01I_PGA3_def.webp',
  'dw-bosch-sms46': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA02008745_SMS46KI03I_def.webp',
  'dw-ifb-neptune': 'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:a9069573-7617-4fec-9a8f-01dc13b38884/as/8903287040306-.webp?quality=60',
  'dw-lg-dfb424': 'https://www.lg.com/content/dam/channel/wcms/in/images/dishwasher/dfb424fp_apzpeil_eail_in_c/gallery/02-1600x1062.jpg?w=800',
  'dw-samsung-dw60m': 'https://images.samsung.com/is/image/samsung/p6pim/in/dw60m5042fs-tl/gallery/in-dw5500mm__dw60m5042fs-dw60m5042fs-tl-520091633?$624_624_PNG$',
  'dw-siemens-sn23': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA03316029_J5627_2671971_SN23EI14CE_def.webp',
  'dw-voltasbeko-df14': 'https://www.voltasbeko.com/media/catalog/product/7/6/7683269177_df14s2_mdm_low_1.png',

  // Air Conditioners
  'ac-daikin-ftkm50': 'https://vsprod.vijaysales.com/media/catalog/product/f/t/ftkm50xv16.jpg',
  'ac-lg-rsq19': 'https://www.lg.com/content/dam/channel/wcms/in/content/img/support/RS-Q19PWZE.jpg',
  'ac-samsung-windfree': 'https://images.samsung.com/is/image/samsung/p6pim/in/ar18cy5zagdnna/gallery/in-ar9500-ac-fast-cooling-447444-ar18cy5zagdnna-534923301?$624_624_PNG$',
  'ac-voltas-185vadz': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Air%20Conditioner/Images/250239_0_wubr40.png',
  'ac-bluestar-ia518': 'https://mc.bajajfinserv.in/media/catalog/product/b/l/bluestaria518dluwhite_additional1.jpeg',

  // Microwave Ovens
  'mw-samsung-ce77': 'https://images.samsung.com/is/image/samsung/p6pim/in/ce77jd-sb-xlt/gallery/in-mw7300k-ce77jd-sb-xlt-530932822?$624_624_PNG$',
  'mw-lg-mj39': 'https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mj3965bqr_dbkqeil_eail_in_c/gallery/MJ3965BQR-DZ-01.jpg?w=800',
  'mw-ifb-30brc': 'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:7289c0a6-ff2d-4560-98fc-12bb7747e9ff/as/8903287010415-.webp?quality=60',

  // Televisions
  'tv-sony-bravia': 'https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=800',
  'tv-samsung-crystal': 'https://images.samsung.com/is/image/samsung/p6pim/in/ua55aue60aklxl/gallery/in-uhd-au7000-388277-ua55aue60aklxl-434861877?$624_624_PNG$',
  'tv-lg-oled55': 'https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55c3psa_atr_eail_in_c/gallery/OLED55C3PSA-DZ-1.jpg?w=800',

  // Vacuum Cleaners
  'vc-dyson-v12': 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/368340-01.png?$responsive$&fmt=png-alpha&cropPathE=desktop&fit=stretch,1&wid=570'
};

async function downloadAndProcess() {
  console.log('Downloading real manufactured appliance photographs...');
  const targetDir1 = path.join(process.cwd(), 'client/public/images/products');
  const targetDir2 = path.join(process.cwd(), 'public/images/products');
  fs.mkdirSync(targetDir1, { recursive: true });
  fs.mkdirSync(targetDir2, { recursive: true });

  let successCount = 0;
  for (const [id, url] of Object.entries(REAL_IMAGE_SOURCES)) {
    try {
      const resp = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      });

      if (!resp.ok) {
        console.warn(`[SKIP] ${id}: HTTP ${resp.status} from ${url.substring(0, 50)}`);
        continue;
      }

      const arrayBuf = await resp.arrayBuffer();
      const buf = Buffer.from(arrayBuf);

      // Standardize to clean studio photo (800x600, contain with white background)
      const processed = await sharp(buf)
        .resize(800, 600, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .jpeg({ quality: 90 })
        .toBuffer();

      const outPath1 = path.join(targetDir1, `${id}.jpg`);
      const outPath2 = path.join(targetDir2, `${id}.jpg`);
      fs.writeFileSync(outPath1, processed);
      fs.writeFileSync(outPath2, processed);

      successCount++;
      console.log(`[SAVED REAL PHOTO] ${id}.jpg (${processed.length} bytes)`);
    } catch (err) {
      console.error(`[ERROR] ${id}: ${err.message}`);
    }
  }

  console.log(`\nSuccessfully downloaded and processed ${successCount}/${Object.keys(REAL_IMAGE_SOURCES).length} real product photographs!`);
}

downloadAndProcess();
