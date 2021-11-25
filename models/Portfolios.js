import mongoose from "mongoose";

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const portfoliosSchema = new Schema(
  {
    // userId: { type: ObjectId, ref: "users", required: "true" },
    userId: String,
    description: String,
    portfolioUrl: String,
    portfolioType: String,
    portfolioTitle: String,
    createdAt: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("portfolios", portfoliosSchema);
