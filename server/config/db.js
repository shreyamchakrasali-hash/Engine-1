import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/appliance_decision_db';
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000 // Timeout after 5s if MongoDB service is not started locally
    });
    console.log(`[MongoDB] Connected successfully to database: ${mongoose.connection.name}`);
    console.log(`[MongoDB Compass] You can view this database at: ${uri}`);
    return true;
  } catch (error) {
    console.warn(`[MongoDB Warning] Could not connect to local MongoDB (${error.message}).`);
    console.warn(`[MongoDB Info] Make sure MongoDB service or MongoDB Compass is active. The Express server will continue running.`);
    return false;
  }
};
