import express from 'express';
import mongoose from 'mongoose';
// import expenseModel from '../models/ExpenseModel.js';
import expenseRoute from "../routes/ExpenseRoute.js"
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());


app.use("/expense", expenseRoute);


const connectionToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB")
    }catch (error){
        console.log(error)
    }
};

// app.get('/', async (req, res) =>{
//    const allExpenses = await expenseModel.find({});
//    res.json(allExpenses);
// });

// app.post('/', async (req, res) =>{
//     const sendData = new expenseModel(req.body);
//     const data = await sendData.save();
//     res.status(201).send(data);
//  });

app.listen(3001, ()=>{
    connectionToDB();
    console.log("server connected")
});