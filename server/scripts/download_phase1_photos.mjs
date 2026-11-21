import fs from 'fs';
import path from 'path';
import sharp from '../node_modules/sharp/lib/index.js';

const PHASE1_SOURCES = {
  // Samsung Refrigerators
  'ref-samsung-rf28t': 'https://images.samsung.com/is/image/samsung/p6pim/latin_en/rf28t5001sr-aa/gallery/latin-en-ref-rf28t5001sr-rf28t5001sr-aa-530563195?$1164_776_PNG$',
  'ref-samsung-rt28': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/275391_0_Nv8StVCEy.png',
  'ref-samsung-rr20': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/321134%20_0_Prr7Dwb6u.png?updatedAt=1775440085860',

  // LG Refrigerators
  'ref-lg-glt432': 'https://img-prd-pim.poorvika.com/cdn-cgi/image/width=400,height=400,quality=75,format=auto/product/lg-437-l-frost-free-double-door-2-star-refrigerator-shiny-steel-gl-t432apzy-01.png',
  'ref-lg-glb201': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/249305_0_fcwz2a.png',
  'ref-lg-gls292': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/249307_0_ztvud2.png',

  // Whirlpool Refrigerators
  'ref-whirlpool-ifpro355': 'https://whirlpoolindia.vtexassets.com/arquivos/ids/171475-800-auto?v=638846994735570000&width=800&height=auto&aspect=true',
  'ref-whirlpool-neo278': 'https://whirlpoolindia.vtexassets.com/arquivos/ids/170942/1.png',
  'ref-whirlpool-wde205': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/270351_0_f-5Zs19jj.png?updatedAt=1763650040183',

  // Godrej Refrigerators
  'ref-godrej-rteon260': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/243384_0_jqlmt3.png',
  'ref-godrej-edge190': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/237783_0_vrspml.png',
  'ref-godrej-rseon579': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/321892_0_6qned2Thid.png?updatedAt=1775654111130',

  // Haier Refrigerators
  'ref-haier-hrb550': 'https://5.imimg.com/data5/SELLER/Default/2023/8/333368985/RV/MR/YR/2929021/531-litres-inverter-french-door-refrigerator-500x500.jpg',
  'ref-haier-hef25': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/321453_0_eBaKrSk48.png?updatedAt=1775440087271',
  'ref-haier-hed204': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/302249_0_cbn5Vm8K_.png?updatedAt=1793011105049',

  // Bosch Refrigerators
  'ref-bosch-kgn56': 'https://media3.bsh-group.com/Product_Shots/5120x/13477702_KGN56XI40I_STP_def.webp',
  'ref-bosch-ctc29': 'https://media3.bsh-group.com/Product_Shots/5120x/20421295_CTC29S031I_def.webp',
  'ref-bosch-kai93': 'https://media3.bsh-group.com/Product_Shots/5120x/18063238_KAI93VIFP_def.webp',

  // Panasonic Refrigerators
  'ref-panasonic-nrbg343': 'https://cdn.moglix.com/p/DeZXRLsbLObRi-xxlarge.jpg',
  'ref-panasonic-nrmb283': 'https://panasonic.scene7.com/is/image/Panasonic/ast-2717643?fmt=png-alpha&wid=613&hei=460',
  'ref-panasonic-nrbs60': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Refrigerator/Images/300607_0_85qFChpo9.png?updatedAt=1793011699888',

  // Bosch Dishwashers
  'dw-bosch-sms66': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA02680218_i7966_2030031_SMS66GI01I_PGA3_def.webp',
  'dw-bosch-sms46': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA02008745_SMS46KI03I_def.webp',
  'dw-bosch-sms24': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA01890333_SMS24AW00I_def.webp',

  // IFB Dishwashers
  'dw-ifb-neptune': 'https://ifbdm.ifbappliances.com/adobe/assets/urn:aaid:aem:a9069573-7617-4fec-9a8f-01dc13b38884/as/8903287040306-.webp?quality=60',
  'dw-ifb-sx1': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dishwashers/Images/308090_echstx.png',
  'dw-ifb-fasto': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dishwashers/Images/320007_0_nzMi2tHx2U.png?updatedAt=1766043360006',

  // LG Dishwashers
  'dw-lg-dfb424': 'https://www.lg.com/content/dam/channel/wcms/in/images/dishwasher/dfb424fp_apzpeil_eail_in_c/gallery/02-1600x1062.jpg?w=800',
  'dw-lg-dfc325': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dishwashers/Images/263384_0_uodelw.png',
  'dw-lg-ldts97': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dishwashers/Images/320064_0_urIOKZdOo.png?updatedAt=1776159789981',

  // Samsung Dishwashers
  'dw-samsung-dw60m': 'https://images.samsung.com/is/image/samsung/p6pim/in/dw60m5042fs-tl/gallery/in-dw5500mm__dw60m5042fs-dw60m5042fs-tl-520091633?$624_624_PNG$',
  'dw-samsung-dw60m60': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dishwashers/Images/235128_0_jikmcm.png',

  // Siemens Dishwashers
  'dw-siemens-sn23': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA03316029_J5627_2671971_SN23EI14CE_def.webp',
  'dw-siemens-sn25': 'https://media3.bsh-group.com/Product_Shots/5120x/MCSA03112009_SN25EI38KM_def.webp',

  // Voltas Beko Dishwashers
  'dw-voltasbeko-df14': 'https://www.voltasbeko.com/media/catalog/product/7/6/7683269177_df14s2_mdm_low_1.png',
  'dw-voltasbeko-dt8s': 'https://media.tatacroma.com/Croma%20Assets/Large%20Appliances/Dishwashers/Images/230836_0_x6qb8p.png'
};

async function run() {
  console.log(`Starting download of ${Object.keys(PHASE1_SOURCES).length} Phase 1 photos (Refrigerators & Dishwashers)...`);
  const clientDir = path.resolve('client/public/images/products');
  const rootDir = path.resolve('public/images/products');
  fs.mkdirSync(clientDir, { recursive: true });
  fs.mkdirSync(rootDir, { recursive: true });

  let successCount = 0;
  let skippedExisting = 0;
  let failCount = 0;

  for (const [id, url] of Object.entries(PHASE1_SOURCES)) {
    const clientPath = path.join(clientDir, `${id}.jpg`);
    const rootPath = path.join(rootDir, `${id}.jpg`);

    // Check if already exists and is non-empty
    if (fs.existsSync(clientPath) && fs.statSync(clientPath).size > 1000) {
      if (!fs.existsSync(rootPath)) {
        fs.copyFileSync(clientPath, rootPath);
      }
      console.log(`[ALREADY ON DISK] ${id}.jpg (${fs.statSync(clientPath).size} bytes)`);
      skippedExisting++;
      continue;
    }

    try {
      console.log(`[FETCHING] ${id} from ${url.slice(0, 60)}...`);
      const resp = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        }
      });

      if (!resp.ok) {
        console.error(`[FAIL] ${id}: HTTP ${resp.status}`);
        failCount++;
        continue;
      }

      const ab = await resp.arrayBuffer();
      const buf = Buffer.from(ab);

      // Clean white studio presentation with sharp containment
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
      successCount++;
    } catch (err) {
      console.error(`[ERROR] ${id}: ${err.message}`);
      failCount++;
    }
  }

  console.log(`\nSummary: ${successCount} downloaded, ${skippedExisting} already existed, ${failCount} failed.`);
}

run().catch(console.error);
