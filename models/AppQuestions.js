import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appQuestionsSchema = new Schema({
  question: String,
  description: String,
  status: { type: Boolean, default: true },
});

export default mongoose.model("appQuestions", appQuestionsSchema);
