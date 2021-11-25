import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recentActivitiesSchema = new Schema({
  userId: String,
  tags: Array,
  description: String,
  recentActivityUrl: String,
  recentActivityType: String,
  recentActivityTitle: String,
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("recentActivities", recentActivitiesSchema);
