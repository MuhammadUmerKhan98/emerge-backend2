import mongoose from "mongoose";

const Schema = mongoose.Schema;

const librariesSchema = new Schema({
  topicName: String,
  description: String,
  topicUrl: String,
  topicType: String,
  category: Array,
  userId: String,
  status: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

export default mongoose.model("libraries", librariesSchema);
