import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TestResultSchema = new Schema({
  questionIds: Array,
  answers: Array,
  status: String,
  userId: String,
  obtMarks: Number,
  totalMarks: Number,
  week: Number,
  topicId: String,
  result: Number,
  percent: Number,
  courseId: String,
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("register_course", TestResultSchema);
