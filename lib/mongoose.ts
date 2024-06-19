import mongoose from "mongoose";

let isConnected = true;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MongoDB URL missing");
  }

  if (isConnected) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, { dbName: "EasySign" });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log("Failed to connect to DB", error);
  }
};

export default connectToDB;
