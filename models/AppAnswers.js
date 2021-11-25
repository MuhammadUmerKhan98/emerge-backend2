import mongoose from "mongoose";

const Schema = mongoose.Schema;

const appAnswersSchema = new Schema({
  userId: String,
  questionId: String,
  answer: String,
});

export default mongoose.model("appAnswers", appAnswersSchema);
