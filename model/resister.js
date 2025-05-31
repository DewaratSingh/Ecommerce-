import mongoose from "mongoose";
const userSignUp = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone: { type: Number, require: true },
    address: { type: String, require: true},
    password: { type: String, require: true },
    shop:{type: mongoose.Schema.Types.ObjectId, ref: "Shop", require: false},
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSignUp);
export default User;
