import mongoose from "mongoose";

const incomesSchema = new mongoose.Schema(
  {
    income: {
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
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("income", incomesSchema);
