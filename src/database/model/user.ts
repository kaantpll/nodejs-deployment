import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      max: 99,
      required: true,
    },
    lastName: {
      type: String,
      max: 99,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
    timestamps: true,
  },
);
export const UserModel = mongoose.model("users", userSchema);
