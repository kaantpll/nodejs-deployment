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

    isConfirm: {
      type: Boolean,
      default: false,
    },

    confirmKey: {
      type: String,
      length: 6,
      default: null,
    },
    confirmExpiresAt: {
      type: String,
      default: null,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.__v;
        delete ret.isConfirm;
        delete ret.confirmKey;
        delete ret.confirmExpiresAt;
      },
    },
    timestamps: true,
  },
);

export const UserModel = mongoose.model("users", userSchema);
