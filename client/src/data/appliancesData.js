export const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/slideshow/hero-kitchen.jpg',
    alt: 'Modern Kitchen Appliances'
  },
  {
    id: 2,
    image: '/images/slideshow/refrigerator.jpg',
    alt: 'Smart Refrigerator'
  },
  {
    id: 3,
    image: '/images/slideshow/washing-machine.jpg',
    alt: 'Front Load Washing Machine'
  },
  {
    id: 4,
    image: '/images/slideshow/air-conditioner.jpg',
    alt: 'Modern Air Conditioner'
  },
  {
    id: 5,
    image: '/images/slideshow/smart-home.jpg',
    alt: 'Home Appliances Command Center'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    stepNumber: '01',
    stepLabel: 'STEP 1',
    title: 'Add Your Appliance',
    description: 'Select your appliance category and enter its basic details. You can also upload an appliance image.',
    icon: 'bi-plus-circle'
  },
  {
    stepNumber: '02',
    stepLabel: 'STEP 2',
    title: 'Identify Your Appliance',
    description: 'The system helps identify the appliance category from the uploaded image. You can confirm the result.',
    icon: 'bi-camera'
  },
  {
    stepNumber: '03',
    stepLabel: 'STEP 3',
    title: 'Analyse Repair Information',
    description: 'Enter appliance age, previous repairs, repair expenses, warranty details and estimated replacement cost.',
    icon: 'bi-clipboard2-data'
  },
  {
    stepNumber: '04',
    stepLabel: 'STEP 4',
    title: 'Get Your Recommendation',
    description: 'The system analyses the information and suggests whether to Repair, Continue Monitoring or Consider Replacement, along with the reasons.',
    icon: 'bi-check2-circle'
  }
];

export const APPLIANCE_CATEGORIES = [
  { id: 'refrigerator', name: 'Refrigerator', icon: 'bi-snow2' },
  { id: 'washing-machine', name: 'Washing Machine', icon: 'bi-droplet-half' },
  { id: 'air-conditioner', name: 'Air Conditioner', icon: 'bi-wind' },
  { id: 'microwave-oven', name: 'Microwave Oven', icon: 'bi-broadcast-pin' },
  { id: 'dishwasher', name: 'Dishwasher', icon: 'bi-water' },
  { id: 'water-heater', name: 'Water Heater', icon: 'bi-fire' },
  { id: 'television', name: 'Television', icon: 'bi-tv' },
  { id: 'ceiling-fan', name: 'Ceiling Fan', icon: 'bi-fan' },
  { id: 'mixer-grinder', name: 'Mixer Grinder', icon: 'bi-gear-wide' },
  { id: 'vacuum-cleaner', name: 'Vacuum Cleaner', icon: 'bi-plug' },
  { id: 'electric-oven', name: 'Electric Oven', icon: 'bi-box-seam' }
];
