import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "ecommerce_app"
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Database connnected successfully...");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;