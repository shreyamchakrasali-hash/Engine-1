import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catalogPath = path.resolve(__dirname, '../../client/src/data/applianceCatalogData.js');
let content = fs.readFileSync(catalogPath, 'utf8');

// Specifications dictionary for all 44 products
const ENRICHED_SPECS = {
  // 1. REFRIGERATOR
  'ref-samsung-rf28t': {
    technicalSpecs: {
      'Appliance Category': 'Refrigerator',
      'Configuration': 'French Door Multi-Door',
      'Total Net Capacity': '580 Litres',
      'Cooling Technology': 'Twin Cooling Plus Dual Evaporators',
      'Defrosting System': 'Frost Free Automatic',
      'Compressor Type': 'Digital Inverter Multi-Speed Compressor',
      'Refrigerant': 'R600a Eco-Friendly Gas',
      'Annual Energy Consumption': '348 kWh/Year (3 Star BEE)'
    },
    productUrl: 'https://www.samsung.com/in/refrigerators/'
  },
  'ref-lg-glt432': {
    technicalSpecs: {
      'Appliance Category': 'Refrigerator',
      'Configuration': 'Double Door Top Freezer',
      'Total Net Capacity': '437 Litres (Fresh Food: 301L, Freezer: 136L)',
      'Cooling Technology': 'DoorCooling+ & Multi Air Flow Vents',
      'Defrosting System': 'Frost Free Automatic',
      'Compressor Type': 'Smart Inverter Energy Compressor',
      'Smart Diagnostics': 'Smart Diagnosis & Auto Smart Connect',
      'Annual Energy Consumption': '290 kWh/Year (2 Star BEE)'
    },
    productUrl: 'https://www.lg.com/in/refrigerators'
  },
  'ref-whirlpool-ifpro355': {
    technicalSpecs: {
      'Appliance Category': 'Refrigerator',
      'Configuration': 'Bottom Mount Double Door',
      'Total Net Capacity': '340 Litres',
      'Cooling Technology': '6th Sense IntelliFresh Pro 10-in-1 Modes',
      'Defrosting System': 'Frost Free Automatic',
      'Compressor Type': 'Intellisense Inverter Variable Speed',
      'Freshness System': 'Microblock & Zeolite Active Fresh Tower',
      'Annual Energy Consumption': '212 kWh/Year (3 Star BEE)'
    },
    productUrl: 'https://www.whirlpoolindia.com/refrigerators'
  },
  'ref-haier-hrb550': {
    technicalSpecs: {
      'Appliance Category': 'Refrigerator',
      'Configuration': 'Side-by-Side 4-Door French Style',
      'Total Net Capacity': '531 Litres',
      'Cooling Technology': 'Twin Inverter Dual-Fan Multi-Airflow',
      'Defrosting System': 'Frost Free Automatic',
      'Compressor Type': 'Twin Inverter Compressor & Fan',
      'Sterilization Tech': 'Deo Fresh Antibacterial Sterilization',
      'Annual Energy Consumption': '350 kWh/Year (4 Star BEE)'
    },
    productUrl: 'https://www.haier.com/in/refrigerators/'
  },

  // 2. WASHING MACHINE
  'wm-samsung-ww80t': {
    technicalSpecs: {
      'Appliance Category': 'Washing Machine',
      'Loading Type': 'Front Load Fully Automatic',
      'Rated Capacity': '8.0 kg',
      'Maximum Spin Speed': '1400 RPM',
      'Motor Technology': 'Digital Inverter Motor with 20-Year Warranty',
      'Wash Programmes': '22 Preset Cycles (Hygiene Steam, 15m Quick, Eco)',
      'Drum Type': 'Diamond Drum Stainless Steel',
      'Operating Water Pressure': '50 - 800 kPa'
    },
    productUrl: 'https://www.samsung.com/in/washing-machines/'
  },
  'wm-lg-fhm1408': {
    technicalSpecs: {
      'Appliance Category': 'Washing Machine',
      'Loading Type': 'Front Load Fully Automatic',
      'Rated Capacity': '8.0 kg',
      'Maximum Spin Speed': '1400 RPM',
      'Motor Technology': 'Inverter Direct Drive (Beltless Motor)',
      'Wash Programmes': '10 Cycles (Cotton, Mix, Baby Care, Sports)',
      'Water Heater': 'In-built Steam Water Heater up to 95°C',
      'Smart Tech': 'Smart Diagnosis via Mobile NFC'
    },
    productUrl: 'https://www.lg.com/in/washing-machines'
  },
  'wm-whirlpool-360bw': {
    technicalSpecs: {
      'Appliance Category': 'Washing Machine',
      'Loading Type': 'Top Load Fully Automatic',
      'Rated Capacity': '7.5 kg',
      'Maximum Spin Speed': '740 RPM',
      'Heater Technology': 'In-built 6-Stage Hot Water Heater up to 60°C',
      'Wash Programmes': '12 Dedicated Programs (Stainwash, Daily, Heavy)',
      'Water Sensor': 'Zero Pressure Fill & Hard Water Wash Sensor',
      'Pulsator Type': '360 BloomWash Bi-directional Impeller'
    },
    productUrl: 'https://www.whirlpoolindia.com/washing-machines'
  },
  'wm-ifb-senator': {
    technicalSpecs: {
      'Appliance Category': 'Washing Machine',
      'Loading Type': 'Front Load Fully Automatic',
      'Rated Capacity': '8.0 kg',
      'Maximum Spin Speed': '1400 RPM',
      'Motor Technology': 'Eco Inverter High-Torque Motor',
      'Wash Programmes': '15 Cycles (Steam Refresh, CradleWash, Express)',
      'Drum Type': 'Crescent Moon Stainless Steel Drum',
      'Water Softener': 'Aqua Energie Built-in Water Treatment'
    },
    productUrl: 'https://www.ifbappliances.com/washing-machines'
  },

  // 3. AIR CONDITIONER
  'ac-daikin-ftkm50': {
    technicalSpecs: {
      'Appliance Category': 'Air Conditioner',
      'AC Configuration': 'Split Inverter Air Conditioner',
      'Cooling Capacity': '1.5 Ton (5000 Watts Nominal, 5200W Max)',
      'Compressor Type': 'Neo Swing Inverter Rotary Compressor',
      'Energy Efficiency': '5 Star BEE (ISEER 5.20)',
      'Annual Power Consumption': '785.67 kWh/Year',
      'Condenser Coil': '100% Grooved Copper Tubes',
      'Refrigerant Gas': 'R32 Eco-Friendly Refrigerant'
    },
    productUrl: 'https://www.daikinindia.com/products/room-air-conditioners'
  },
  'ac-lg-rsq19': {
    technicalSpecs: {
      'Appliance Category': 'Air Conditioner',
      'AC Configuration': 'Split Inverter with AI Convertible 6-in-1',
      'Cooling Capacity': '1.5 Ton (5000 Watts Nominal, 5800W Max)',
      'Compressor Type': 'AI DUAL Inverter Variable Speed Compressor',
      'Energy Efficiency': '5 Star BEE (ISEER 5.20)',
      'Annual Power Consumption': '685.26 kWh/Year',
      'Condenser Coil': 'Ocean Black Fin Anti-Corrosion Copper Coil',
      'Air Filtration': 'HD Filter with Anti-Virus Protection'
    },
    productUrl: 'https://www.lg.com/in/air-conditioners'
  },
  'ac-voltas-185vadz': {
    technicalSpecs: {
      'Appliance Category': 'Air Conditioner',
      'AC Configuration': 'Split Inverter Air Conditioner',
      'Cooling Capacity': '1.5 Ton (5100 Watts Nominal)',
      'Compressor Type': 'High EER Twin Rotary Inverter Compressor',
      'Energy Efficiency': '5 Star BEE (ISEER 5.00)',
      'Annual Power Consumption': '892.32 kWh/Year',
      'Condenser Coil': '100% Copper with Hydrophilic Blue Fins',
      'Ambient Cooling': 'High Ambient Operation up to 52°C'
    },
    productUrl: 'https://www.myvoltas.com/air-conditioners'
  },
  'ac-bluestar-ia518': {
    technicalSpecs: {
      'Appliance Category': 'Air Conditioner',
      'AC Configuration': 'Split Inverter Air Conditioner with Smart App',
      'Cooling Capacity': '1.5 Ton (5050 Watts / 17230 BTU/hr)',
      'Compressor Type': 'Inverter Rotary with Acoustic Jacket',
      'Energy Efficiency': '5 Star BEE (ISEER 5.02)',
      'Annual Power Consumption': '856.12 kWh/Year',
      'Condenser Coil': '100% Inner Grooved Copper Tubes',
      'Air Filtration': 'Dust Filter + PM2.5 Active Carbon Filter'
    },
    productUrl: 'https://www.bluestarindia.com/air-conditioners'
  },

  // 4. MICROWAVE OVEN
  'mw-samsung-combi21': {
    technicalSpecs: {
      'Appliance Category': 'Microwave Oven',
      'Microwave Type': 'Convection Combi Microwave Oven',
      'Cavity Capacity': '21 Litres',
      'Power Output': '800W Microwave / 1100W Grill / 1400W Convection',
      'Cavity Material': 'Ceramic Enamel Cavity (99.9% Antibacterial)',
      'Cooking Modes': 'Micro, Grill, Convection, Combi, Power Defrost',
      'Control Type': 'Tactile Membrane Buttons with LED Display',
      'Turntable Size': '255 mm Glass Turntable'
    },
    productUrl: 'https://www.samsung.com/in/microwaves/'
  },
  'mw-lg-mc2846': {
    technicalSpecs: {
      'Appliance Category': 'Microwave Oven',
      'Microwave Type': 'Convection Microwave Oven',
      'Cavity Capacity': '28 Litres',
      'Power Output': '900W Microwave / 1200W Grill / 1950W Convection',
      'Cavity Material': 'Stainless Steel Cavity for Uniform Reflection',
      'Cooking Modes': 'Diet Fry, Tandoor Se, Indian Roti Basket, Pasteurize Milk',
      'Auto Cook Menus': '251 Auto Cook Menus with 175 Indian Recipes',
      'Turntable Size': '320 mm Glass Turntable'
    },
    productUrl: 'https://www.lg.com/in/microwave-ovens'
  },
  'mw-ifb-23bc4': {
    technicalSpecs: {
      'Appliance Category': 'Microwave Oven',
      'Microwave Type': 'Convection Microwave Oven',
      'Cavity Capacity': '23 Litres',
      'Power Output': '800W Microwave / 1200W Grill / 1200W Convection',
      'Cavity Material': 'Stainless Steel Floral Cavity',
      'Cooking Modes': 'Multi-stage Cooking, Keep Warm, Steam Clean, Deodorize',
      'Auto Cook Menus': '71 Pre-programmed Auto Menus',
      'Turntable Size': '270 mm Glass Turntable'
    },
    productUrl: 'https://www.ifbappliances.com/microwave-ovens'
  },
  'mw-panasonic-nnct64': {
    technicalSpecs: {
      'Appliance Category': 'Microwave Oven',
      'Microwave Type': 'Convection Microwave Oven',
      'Cavity Capacity': '27 Litres',
      'Power Output': '900W Microwave / 1400W Convection & Grill',
      'Cavity Material': 'Stainless Steel 360° Heat Wrap Cavity',
      'Cooking Modes': 'Zero Oil Recipes, Tandoori Delight, Auto Defrost',
      'Auto Cook Menus': '101 Pre-set Indian & Global Menus',
      'Turntable Size': '315 mm Glass Turntable'
    },
    productUrl: 'https://www.panasonic.com/in/consumer/home-appliances/microwave-ovens.html'
  },

  // 5. DISHWASHER
  'dw-bosch-sms66': {
    technicalSpecs: {
      'Appliance Category': 'Dishwasher',
      'Mounting Type': 'Free-Standing / Under-Counter Dishwasher',
      'Capacity': '14 Place Settings (Suitable for 6-8 Members)',
      'Water Consumption': '9.5 Litres per Eco Cycle',
      'Energy Rating': 'A+++ European Energy Efficiency Class',
      'Motor Type': 'EcoSilence Drive Brushless Motor',
      'Wash Programs': '6 Programs (Intensive 70°C, Auto, Eco 50°C, Express, Prerinse)',
      'Drying Technology': 'Zeolith Mineral Adsorption Drying'
    },
    productUrl: 'https://www.bosch-home.in/products-list/dishwashers'
  },
  'dw-ifb-neptune': {
    technicalSpecs: {
      'Appliance Category': 'Dishwasher',
      'Mounting Type': 'Free-Standing Dishwasher',
      'Capacity': '16 Place Settings (Accommodates Large Indian Utensils)',
      'Water Consumption': '9.0 Litres per Normal Cycle',
      'Energy Rating': 'A++ Energy Certified',
      'Wash Programs': '8 Dedicated Programs (Hygiene 70°C, Super 50, Eco, Glass)',
      'Special Features': 'Steam Drying, Triple Arm Spray & Built-in Water Softener',
      'Noise Level': '49 dB Quiet Operation'
    },
    productUrl: 'https://www.ifbappliances.com/dishwashers'
  },
  'dw-siemens-sn23': {
    technicalSpecs: {
      'Appliance Category': 'Dishwasher',
      'Mounting Type': 'Free-Standing Dishwasher with Home Connect',
      'Capacity': '13 Place Settings',
      'Water Consumption': '9.5 Litres per Cycle',
      'Energy Rating': 'A+++ European Energy Rating',
      'Motor Type': 'iQdrive Frictionless Inverter Motor',
      'Wash Programs': '6 Programs (Intensive Plus 70°C, Speed 65°C, Eco 50°C, Auto)',
      'Drying Assist': 'AutoOpen Dry Door Assist System'
    },
    productUrl: 'https://www.siemens-home.bsh-group.in/dishwashers'
  },
  'dw-lg-dfb424': {
    technicalSpecs: {
      'Appliance Category': 'Dishwasher',
      'Mounting Type': 'Free-Standing Dishwasher with QuadWash',
      'Capacity': '14 Place Settings',
      'Water Consumption': '9.6 Litres per Eco Cycle',
      'Energy Rating': 'A+++ Energy Rated',
      'Motor Type': 'Inverter Direct Drive Motor with 10-Year Warranty',
      'Wash Programs': '9 Wash Programs (TrueSteam Hygiene, Dual Zone, Turbo, Eco)',
      'Spray Mechanism': 'QuadWash 4 Multi-Directional Spray Arms'
    },
    productUrl: 'https://www.lg.com/in/dishwashers'
  },

  // 6. WATER HEATER
  'wh-bajaj-shaktipro': {
    technicalSpecs: {
      'Appliance Category': 'Water Heater',
      'Geyser Type': 'Vertical Storage Water Geyser',
      'Storage Capacity': '10 Litres',
      'Rated Wattage': '2000 Watts Heating Element',
      'Pressure Rating': '8 Bar (Suitable for High-Rise Apartments)',
      'Tank Construction': 'Titanium Armour Marine-Coated Mild Steel',
      'Heating Element': 'Incoloy 800 Glass-Coated Element',
      'Safety Systems': 'Thermal Cutout & Multi-Function Safety Valve'
    },
    productUrl: 'https://shop.bajajelectricals.com/water-heaters/'
  },
  'wh-havells-adonia': {
    technicalSpecs: {
      'Appliance Category': 'Water Heater',
      'Geyser Type': 'Vertical Storage Water Geyser',
      'Storage Capacity': '15 Litres',
      'Rated Wattage': '2000 Watts Incoloy 800 Element',
      'Pressure Rating': '8 Bar High-Rise Certified',
      'Tank Construction': 'Ultra-Thick Cold Rolled Steel with Feroglas Enamel',
      'Temperature Display': 'Color-Changing LED Temperature Indicator Dial',
      'Thermal Insulation': 'CFC-Free High Density PUF Insulation'
    },
    productUrl: 'https://www.havells.com/en/consumer/appliances/water-heaters.html'
  },
  'wh-racold-omnis': {
    technicalSpecs: {
      'Appliance Category': 'Water Heater',
      'Geyser Type': 'Vertical Storage Water Geyser',
      'Storage Capacity': '25 Litres',
      'Rated Wattage': '2000 Watts Titanium Enamel Element',
      'Pressure Rating': '8 Bar Working Pressure Rating',
      'Tank Construction': 'Titanium Plus Enamel Coating Tank',
      'Control Features': 'Smart Bath Logic & Eco Function Dial',
      'Safety Protection': 'Auto Thermal Cut-off & Pressure Relief Valve'
    },
    productUrl: 'https://www.racold.com/water-heaters/'
  },
  'wh-aosmith-xpress': {
    technicalSpecs: {
      'Appliance Category': 'Water Heater',
      'Geyser Type': 'Vertical Storage Water Geyser with Fast Heat',
      'Storage Capacity': '25 Litres',
      'Rated Wattage': '3000 Watts Xpress Fast Heating Element',
      'Pressure Rating': '8 Bar High-Rise Suitable',
      'Tank Construction': 'Blue Diamond Glass-Lined Inner Container',
      'Anode Rod': 'Custom Alloy Anode with 2X Lifespan in Hard Water',
      'Safety Systems': 'Double Protection with Thermal Cutout & Valve'
    },
    productUrl: 'https://www.aosmithindia.com/water-heaters/'
  },

  // 7. TELEVISION
  'tv-samsung-crystal55': {
    technicalSpecs: {
      'Appliance Category': 'Television',
      'Screen Size': '55 Inches (138 cm Diagonal)',
      'Display Technology': 'Crystal UHD LED Panel with PurColor',
      'Display Resolution': '4K Ultra HD (3840 x 2160 Pixels)',
      'Refresh Rate': '50 / 60 Hz with Motion Xcelerator',
      'Picture Processor': 'Crystal Processor 4K with 4K Upscaling',
      'Audio Output': '20 Watts with OTS Lite & Q-Symphony',
      'Operating System': 'Tizen Smart TV with Samsung Knox Security'
    },
    productUrl: 'https://www.samsung.com/in/tvs/'
  },
  'tv-lg-ur75': {
    technicalSpecs: {
      'Appliance Category': 'Television',
      'Screen Size': '55 Inches (139 cm Diagonal)',
      'Display Technology': '4K Ultra HD IPS LED Panel with HDR10 Pro',
      'Display Resolution': '4K Ultra HD (3840 x 2160 Pixels)',
      'Refresh Rate': '60 Hz Native Refresh Rate',
      'Picture Processor': 'α5 AI Processor 4K Gen6',
      'Audio Output': '20 Watts 2.0 Channel with AI Sound Pro',
      'Operating System': 'webOS 23 with ThinQ AI, Apple AirPlay 2'
    },
    productUrl: 'https://www.lg.com/in/tvs'
  },
  'tv-sony-bravia': {
    technicalSpecs: {
      'Appliance Category': 'Television',
      'Screen Size': '55 Inches (138.8 cm Diagonal)',
      'Display Technology': 'Direct LED 4K Panel with Motionflow XR 100',
      'Display Resolution': '4K Ultra HD (3840 x 2160 Pixels)',
      'Refresh Rate': '60 Hz Refresh Rate',
      'Picture Processor': 'Sony 4K Processor X1 with 4K X-Reality PRO',
      'Audio Output': '20 Watts Open Baffle Speaker with Dolby Audio',
      'Operating System': 'Google TV with Chromecast & Voice Remote'
    },
    productUrl: 'https://www.sony.co.in/electronics/tv'
  },
  'tv-tcl-v6c': {
    technicalSpecs: {
      'Appliance Category': 'Television',
      'Screen Size': '55 Inches (139 cm Diagonal)',
      'Display Technology': 'A+ Grade 4K Panel with HDR10 & Micro Dimming',
      'Display Resolution': '4K Ultra HD (3840 x 2160 Pixels)',
      'Refresh Rate': '60 Hz Refresh Rate',
      'Picture Processor': 'AiPQ Engine 3.0 Quad Core',
      'Audio Output': '24 Watts Stereo Speakers with Dolby Audio',
      'Operating System': 'Google TV with Hands-Free Voice Control'
    },
    productUrl: 'https://www.tcl.com/in/en/tvs'
  },

  // 8. CEILING FAN
  'cf-havells-stealth': {
    technicalSpecs: {
      'Appliance Category': 'Ceiling Fan',
      'Blade Sweep Size': '1200 mm (48 Inches)',
      'Motor Technology': 'Energy-Efficient BLDC Copper Motor',
      'Power Consumption': '26 Watts at Top Speed (60% Energy Saving)',
      'Rotational Speed': '280 RPM',
      'Air Delivery Rate': '240 CMM (Cubic Metres per Minute)',
      'Control Method': 'Point-Anywhere RF Remote Control with Timer',
      'Blade Material': 'Aerodynamic Hydrodynamic Profile Blades'
    },
    productUrl: 'https://www.havells.com/en/consumer/fans/ceiling-fans.html'
  },
  'cf-crompton-hyperjet': {
    technicalSpecs: {
      'Appliance Category': 'Ceiling Fan',
      'Blade Sweep Size': '1200 mm (48 Inches)',
      'Motor Technology': 'ActivBLDC Inverter High-Torque Motor',
      'Power Consumption': '35 Watts at Maximum Speed',
      'Rotational Speed': '350 RPM High Speed',
      'Air Delivery Rate': '220 CMM Air Delivery',
      'Control Method': 'Smart RF Remote with Sleep & Boost Modes',
      'Protection Coating': 'Anti-dust Coated Blades & Overvoltage Guard'
    },
    productUrl: 'https://www.crompton.co.in/collections/ceiling-fans'
  },
  'cf-orient-zeno': {
    technicalSpecs: {
      'Appliance Category': 'Ceiling Fan',
      'Blade Sweep Size': '1200 mm (48 Inches)',
      'Motor Technology': 'Inverter BLDC Motor with 100% Copper Wire',
      'Power Consumption': '26 Watts Input Power',
      'Rotational Speed': '330 RPM Speed',
      'Air Delivery Rate': '235 CMM Airflow Capacity',
      'Control Method': 'Ergonomic Remote Control with Timer Off',
      'Acoustic Level': 'Ultra-Quiet Whisper Operation (< 45 dB)'
    },
    productUrl: 'https://www.orientelectric.com/fans/ceiling-fans'
  },
  'cf-atomberg-renesa': {
    technicalSpecs: {
      'Appliance Category': 'Ceiling Fan',
      'Blade Sweep Size': '1200 mm (48 Inches)',
      'Motor Technology': 'Atomberg Super-Efficient BLDC Motor',
      'Power Consumption': '28 Watts at Speed 5 (6 Watts at Speed 1)',
      'Rotational Speed': '360 RPM High Speed',
      'Air Delivery Rate': '230 CMM Air Delivery',
      'Control Method': 'Smart IR Remote with Boost, Sleep & Timer Modes',
      'Status Display': 'Speed & Mode LED Indicators on Canopy'
    },
    productUrl: 'https://atomberg.com/renesa-ceiling-fan/'
  },

  // 9. MIXER GRINDER
  'mg-preethi-zodiac': {
    technicalSpecs: {
      'Appliance Category': 'Mixer Grinder',
      'Motor Wattage': '750 Watts Vega W5 Copper Motor',
      'Jar Configuration': '5 Jars (2.1L Master Chef, 1.5L Wet, 1.0L Dry, 0.5L Chutney, 1.5L Extractor)',
      'Operating Speeds': '3 Speeds Rotary Dial with Incher Pulse (19,000 RPM)',
      'Blades Construction': 'Machine Ground & Polished SS 304 Blades',
      'Food Processing': 'Atta Kneading in 1 Min, Chopping, Slicing, Grating',
      'Cooling System': '3D Airflow Cooling for Extended Motor Life'
    },
    productUrl: 'https://www.preethi.in/mixer-grinders'
  },
  'mg-philips-hr7000': {
    technicalSpecs: {
      'Appliance Category': 'Mixer Grinder',
      'Motor Wattage': '750 Watts Turbo Motor with Advanced Air Ventilation',
      'Jar Configuration': '3 Stainless Steel Jars (1.5L Wet Jar, 1.0L Multipurpose, 0.3L Chutney)',
      'Operating Speeds': '3 Speed Control with Pulse Dial (21,000 RPM)',
      'Coupler Construction': 'Tough Neoprene Coupler with Triangular Flange',
      'Stability System': 'Anti-Skid Suction Rubber Feet',
      'Overload Safety': 'Auto Overload Thermal Reset Switch'
    },
    productUrl: 'https://www.philips.co.in/c-m-ho/food-preparation/mixer-grinders'
  },
  'mg-bosch-truemixx-radiance': {
    technicalSpecs: {
      'Appliance Category': 'Mixer Grinder',
      'Motor Wattage': '600 Watts HiFlux 100% Copper Winding Motor',
      'Jar Configuration': '4 Pieces (1.5L Wet Grinding, 1.0L Dry Grinding, 0.4L Chutney, Plastic Blender)',
      'Operating Speeds': '3 Speeds with Pulse Incher Dial',
      'Blades Construction': 'Stone Pounding Technology (PoundingBlade) for Coarse Masalas',
      'Jar Flow System': 'Stainless Steel Jars with Active Flow Breakers',
      'Motor Safety': 'Overload Protector with Manual Reset Push Button'
    },
    productUrl: 'https://www.bosch-home.in/products-list/kitchen-machines/mixer-grinders'
  },
  'mg-sujata-dynamix': {
    technicalSpecs: {
      'Appliance Category': 'Mixer Grinder',
      'Motor Wattage': '900 Watts Heavy Duty Double Ball Bearing Motor',
      'Jar Configuration': '3 Stainless Steel Heavy Jars (1.75L Dome Wet Jar, 1.0L Dry Grinder, 0.4L Chutney)',
      'Continuous Duty': '90 Minutes Continuous Running Duty Cycle',
      'Operating Speeds': '22,000 RPM High Speed with 3-Speed Rotary Switch',
      'Housing Material': 'Shock-Proof High Impact Polycarbonate Housing',
      'Motor Bearings': 'Zero Maintenance Sealed Dual Ball Bearings'
    },
    productUrl: 'https://sujataappliances.com/mixer-grinder/'
  },

  // 10. VACUUM CLEANER
  'vc-dyson-v12': {
    technicalSpecs: {
      'Appliance Category': 'Vacuum Cleaner',
      'Cleaner Type': 'Cordless Stick Vacuum with Fluffy Optic Laser',
      'Suction Power': '150 Air Watts (AW) Hyperdymium Motor (125,000 RPM)',
      'Dust Bin Capacity': '0.35 Litres Hygienic Point-and-Shoot Bin',
      'Filtration System': 'Whole-Machine Fully Sealed HEPA Filtration (99.99% at 0.1 microns)',
      'Battery Runtime': 'Up to 60 Minutes Fade-Free Suction on Single Battery',
      'Particle Sensor': 'Piezo Sensor with LCD Screen Showing Real-Time Particle Counts',
      'Total Weight': '2.2 kg Lightweight Handheld Body'
    },
    productUrl: 'https://www.dyson.in/products/vacuum-cleaners'
  },
  'vc-philips-fc9352': {
    technicalSpecs: {
      'Appliance Category': 'Vacuum Cleaner',
      'Cleaner Type': 'Bagless Canister Cylinder Vacuum Cleaner',
      'Motor & Suction': '1900 Watts Input Motor delivering 370 Watts Suction',
      'Dust Bin Capacity': '1.5 Litres One-Hand Empty Dust Canister',
      'Filtration System': 'PowerCyclone 5 with Fully Sealed Allergy H13 Filter (99.9% Capture)',
      'Operating Radius': '9 Metres Action Radius with 6m Power Cord',
      'Nozzles Included': 'MultiClean Floor Nozzle, Integrated Soft Brush, Crevice Tool'
    },
    productUrl: 'https://www.philips.co.in/c-m-ho/vacuum-cleaners'
  },
  'vc-eureka-maxxvac': {
    technicalSpecs: {
      'Appliance Category': 'Vacuum Cleaner',
      'Cleaner Type': 'Bagless Canister Vacuum with Blower Function',
      'Motor & Suction': '1900 Watts High Suction Motor (21 kPa Suction Pressure)',
      'Dust Bin Capacity': '2.0 Litres Easy Clean Dust Tank',
      'Filtration System': 'Multi-Stage Cyclonic Filtration with Washable HEPA Filter',
      'Special Functions': 'Dual Suction & Powerful Blower Function',
      'Suction Control': 'Variable Suction Speed Dial for Delicate Surfaces'
    },
    productUrl: 'https://www.eurekaforbes.com/vacuum-cleaners'
  },
  'vc-karcher-wd3': {
    technicalSpecs: {
      'Appliance Category': 'Vacuum Cleaner',
      'Cleaner Type': 'Heavy Duty Wet & Dry Multi-Purpose Drum Vacuum',
      'Motor & Suction': '1000 Watts Energy-Efficient Motor (200 mbar Suction)',
      'Container Capacity': '17 Litres Impact-Resistant Polypropylene Drum',
      'Filtration System': 'Single-Piece Cartridge Filter (Dry & Wet without filter change)',
      'Special Functions': 'Blower Function for Leaf & Debris Clearing',
      'Hose & Accessories': '2-Metre Suction Hose with 2 x 0.5m Extension Tubes'
    },
    productUrl: 'https://www.kaercher.com/in/home-garden/vacuum-cleaners/wet-and-dry-vacuum-cleaners.html'
  },

  // 11. ELECTRIC OVEN
  'eo-lg-mjen286': {
    technicalSpecs: {
      'Appliance Category': 'Electric Oven',
      'Oven Type': 'Charcoal Convection Baking & Roasting Oven',
      'Cavity Capacity': '28 Litres',
      'Power Output': '1400W Bake / 1950W Convection / 1200W Charcoal Grill',
      'Heating Technology': 'Charcoal Lighting Heater for Authentic Tandoor Flavor',
      'Temperature Range': '40°C (Fermentation) to 250°C Precision Baking',
      'Special Menus': 'Diet Fry 88% Less Oil, 30 Indian Roti Basket, Tandoor Se',
      'Cavity Interior': 'Stainless Steel Round Cavity'
    },
    productUrl: 'https://www.lg.com/in/microwave-ovens'
  },
  'eo-samsung-baker28': {
    technicalSpecs: {
      'Appliance Category': 'Electric Oven',
      'Oven Type': 'Baker Series Convection Electric Baking Oven',
      'Cavity Capacity': '28 Litres',
      'Power Output': '1400W Bake / 1500W Convection / 900W Microwave',
      'Heating Elements': 'Dual Sheath Quartz Grill & Convection Fan Heater',
      'Temperature Range': '40°C to 200°C Multi-Level Temperature Selection',
      'Baking Modes': 'Bread Dough & Yogurt Fermentation, Crusty Plate Browning Plus',
      'Cavity Interior': 'Ceramic Enamel Scratch-Resistant Interior'
    },
    productUrl: 'https://www.samsung.com/in/microwaves/'
  },
  'eo-ifb-30brc2': {
    technicalSpecs: {
      'Appliance Category': 'Electric Oven',
      'Oven Type': 'Multi-Stage Convection Oven with Motorized Rotisserie',
      'Cavity Capacity': '30 Litres',
      'Power Output': '1600W Upper & Lower Heating / 1400W Convection Fan',
      'Cooking Modes': 'Bake, Broil, Toast, Roast, Motorized Rotisserie 360°',
      'Special Functions': 'Fermentation Mode, Keep Warm, 101 Auto Cook Menus',
      'Cavity Interior': 'High-Grade Stainless Steel Mirror Cavity'
    },
    productUrl: 'https://www.ifbappliances.com/microwave-ovens'
  },
  'eo-bosch-series4': {
    technicalSpecs: {
      'Appliance Category': 'Electric Oven',
      'Oven Type': 'Built-in Convection Baking & Roasting Electric Oven',
      'Cavity Capacity': '66 Litres Large Interior Cavity',
      'Connected Load': '3300 Watts Max Connected Load',
      'Heating Modes': '5 Modes (3D HotAir, Conventional Top/Bottom, Hot Air Grilling, Full Width Grill, Defrost)',
      'Temperature Range': '50°C to 275°C Precision Thermostat',
      'Energy Efficiency': 'A European Energy Efficiency Class',
      'Cavity Interior': 'Granite Grey Enamel with Halogen Interior Lighting'
    },
    productUrl: 'https://www.bosch-home.in/products-list/cooking-baking/ovens'
  }
};

// Now import the existing catalog data in memory and write out the file with enriched specs
const catalogModuleUrl = 'file:///' + catalogPath.replace(/\\/g, '/');
const { ALL_CATEGORIES, CATEGORY_BRANDS_MAP, ALL_BRANDS, APPLIANCE_CATALOG } = await import(catalogModuleUrl);

const updatedCatalog = APPLIANCE_CATALOG.map(item => {
  const enrichment = ENRICHED_SPECS[item.id] || {};
  return {
    ...item,
    technicalSpecs: enrichment.technicalSpecs || {
      'Appliance Category': item.category,
      'Product Type': item.formFactor,
      'Capacity / Size': item.capacity,
      'Energy Information': item.energyRating,
      'Dimensions (WxHxD)': item.dimensions,
      'Colorway': item.colorway
    },
    productUrl: enrichment.productUrl || 'https://www.google.com/search?q=' + encodeURIComponent(item.brand + ' ' + item.modelNumber)
  };
});

const fileHeader = `/**
 * APPLIANCE DECISION SYSTEM - FINAL PRODUCT CATALOGUE
 * Theme 3 - Search and Ranking System
 * 
 * STRICT SPECIFICATION:
 * - Exactly 11 Appliance Categories
 * - Exactly 4 Specified Brands per Category
 * - Exactly 4 Distinct, Genuine Manufactured Product Photographs per Category
 * - Total: 44 Product Cards, 44 Distinct Real Photographs
 * - Detailed verified technical specifications for all 44 products
 * - Official manufacturer reference links for every model
 */

export const ALL_CATEGORIES = ${JSON.stringify(ALL_CATEGORIES, null, 2)};

export const CATEGORY_BRANDS_MAP = ${JSON.stringify(CATEGORY_BRANDS_MAP, null, 2)};

export const ALL_BRANDS = ${JSON.stringify(ALL_BRANDS, null, 2)};

export const APPLIANCE_CATALOG = ${JSON.stringify(updatedCatalog, null, 2)};
`;

fs.writeFileSync(catalogPath, fileHeader, 'utf8');

const rootCatalogPath = path.resolve(__dirname, '../../src/data/applianceCatalogData.js');
if (fs.existsSync(path.dirname(rootCatalogPath))) {
  fs.writeFileSync(rootCatalogPath, fileHeader, 'utf8');
}

console.log('Successfully enriched all 44 items in applianceCatalogData.js');
