import mongoose from 'mongoose';

const repairRecordSchema = new mongoose.Schema({
  date: { 
    type: Date, 
    default: Date.now 
  },
  description: { 
    type: String, 
    required: [true, 'Problem description is required'],
    trim: true 
  },
  cost: { 
    type: Number, 
    required: [true, 'Repair cost is required'],
    min: [0, 'Cost cannot be negative']
  },
  status: {
    type: String,
    enum: ['Completed', 'Scheduled', 'In Progress'],
    default: 'Completed'
  },
  technician: { 
    type: String,
    trim: true,
    default: 'Certified Service Technician'
  },
  invoiceNumber: {
    type: String,
    trim: true,
    default: ''
  },
  repairType: {
    type: String,
    enum: ['Repair', 'Preventative Maintenance', 'Inspection', 'Part Replacement'],
    default: 'Repair'
  },
  symptoms: [{
    type: String,
    trim: true
  }],
  notes: {
    type: String,
    trim: true,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  },
  aiCheck: {
    predictedCategory: { type: String, default: null },
    confidencePercentage: { type: Number, default: null },
    isMismatch: { type: Boolean, default: false },
    mismatchWarning: { type: String, default: '' }
  },
  partsReplaced: [String]
}, {
  timestamps: true
});

const applianceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required for appliance association'],
    index: true
  },
  name: { 
    type: String, 
    required: [true, 'Appliance name is required'],
    trim: true 
  },
  category: { 
    type: String, 
    required: [true, 'Appliance category is required'],
    enum: [
      'Refrigerator', 
      'Washing Machine', 
      'Air Conditioner', 
      'Microwave Oven', 
      'Dishwasher', 
      'Water Heater', 
      'Television', 
      'Ceiling Fan', 
      'Mixer Grinder', 
      'Vacuum Cleaner', 
      'Electric Oven', 
      'Other'
    ]
  },
  brand: { 
    type: String, 
    required: [true, 'Brand is required'],
    trim: true 
  },
  modelNumber: { 
    type: String,
    trim: true,
    default: 'Standard Model'
  },
  purchaseYear: { 
    type: Number, 
    required: [true, 'Purchase year is required'],
    min: 1980,
    max: new Date().getFullYear()
  },
  purchasePrice: { 
    type: Number, 
    required: [true, 'Purchase price is required'],
    min: [0, 'Purchase price cannot be negative']
  },
  currentCondition: {
    type: String,
    enum: ['Excellent', 'Good', 'Fair', 'Needs Inspection', 'Critical'],
    default: 'Good'
  },
  warrantyStatus: {
    type: String,
    enum: ['Active', 'Expired', 'Extended'],
    default: 'Active'
  },
  imageUrl: { 
    type: String, 
    default: '/images/slideshow/hero-kitchen.jpg' 
  },
  repairHistory: [repairRecordSchema],
  totalMaintenanceCost: { 
    type: Number, 
    default: 0 
  },
  recommendationStatus: {
    type: String,
    enum: ['Repair Recommended', 'Monitor Closely', 'Replacement Advised', 'Pending Evaluation'],
    default: 'Pending Evaluation'
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Middleware to keep totalMaintenanceCost in sync whenever repairs are saved
applianceSchema.pre('save', function (next) {
  if (this.repairHistory && this.repairHistory.length > 0) {
    this.totalMaintenanceCost = this.repairHistory.reduce((total, item) => total + (item.cost || 0), 0);
  } else {
    this.totalMaintenanceCost = 0;
  }
  next();
});

export const Appliance = mongoose.model('Appliance', applianceSchema);
