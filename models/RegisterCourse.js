import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RegisterCourseSchema = new Schema({
  userId: String,
  completionStatus: { type: Boolean, default: false, required: true },
  courseId: String,
  status: String,
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("register_course", RegisterCourseSchema);
