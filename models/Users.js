import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    isPaid: { type: Boolean, default: false },
    isRegistered: { type: Boolean, default: false },
    status: { type: String, default: "active" },
    profileStatus: { type: Boolean, default: false },
    applicationStatus: { type: String, default: "pending" },
    isJob: { type: Boolean, default: false },
    isMaster: { type: Boolean, default: false },
    isInter: { type: Boolean, default: false },
    knowThrough: Array,
    email: { type: String, require: true, trim: true },
    password: { type: String, trim: true },
    firstName: { type: String },
    lastName: { type: String },
    phone: Number,
    city: { type: String },
    userRole: { type: String },
    loggedDevices: [
      {
        deviceId: { type: String, required: true },
        notificationToken: { type: String, required: true },
        jwtToken: {
          token: { type: String },
          createdAt: { type: Date },
        },
      },
    ],
    code: { type: String },
    jwtToken: {
      token: { type: String },
      createdAt: { type: Date },
    },
    birthday: String,
    grade: String,
    institute: String,
    primeGuardianEmail: String,
    primeGuardianFirstName: String,
    primeGuardianLastName: String,
    secGuardianEmail: String,
    secGuardianFirstName: String,
    secGuardianLastName: String,
    profileImage: String,
    profileLink: String,
    personalityType: String,
    coverImage: {
      type: String,
      default:
        "https://res.cloudinary.com/emergeyouthprogram/image/upload/v1625477132/emerge_forwar/sexwfupr8wvyhthkylay.svg",
    },
    bio: String,
    gender: String,
    createdAt: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
