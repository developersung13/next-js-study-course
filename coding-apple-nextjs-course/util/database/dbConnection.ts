import { MongoClient } from 'mongodb';

let connectDB: Promise<MongoClient>;
connectDB = new MongoClient(
  process.env.MONGODB_URI as string,
  undefined
).connect();

export { connectDB };
