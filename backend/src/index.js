import express from "express";
import mongoose from "mongoose";
import expenseRoute from "../routes/ExpenseRoute.js";
import incomesRoute from "../routes/IncomesRoute.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/expense", expenseRoute);
app.use("/incomes", incomesRoute);

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.listen(3001, () => {
  connectionToDB();
  console.log("server connected");
});
