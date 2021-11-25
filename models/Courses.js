import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CoursesSchema = new Schema({
  courseName: String,
  description: String,
  courseImageURL: String,
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("Courses", CoursesSchema);
