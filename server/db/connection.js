import mongoose, { mongo } from "mongoose";
import chalk from "chalk";

const DATABASE_URL = process.env.DATABASE_URL

// Remove mongooose strcitQuery set to false. We don't want to be able to write
// to the database unless input perfectly matches models
// mongoose.set('strictQuery', false) 
mongoose.connect(DATABASE_URL)

mongoose.connection.on("connected", () => {
  console.log(chalk.bold("connected to MongoDB"));
})

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});
