import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CoursesTopicDetailSchema = new Schema({
  status: { type: Boolean, default: false },
  courseId: String,
  description: String,
  materialUrl: String,
  materialType: String,
  weeks: Number,
  topicName: String,
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model(
  "Courses_Topic_Details",
  CoursesTopicDetailSchema
);
