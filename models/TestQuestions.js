import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TestQuestionsSchema = new Schema({
  choices: Array,
  status: String,
  question: String,
  courseId: String,
  week: Number,
  correctAnswer: String,
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("Test_Questions", TestQuestionsSchema);
