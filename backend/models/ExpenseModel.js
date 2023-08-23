import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
    {
        expense: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }, 
        name: {
            type: String,
            required: false,
        }, 
        date: {
            type: Date,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("expense", expenseSchema);
