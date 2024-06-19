import { Schema, model, models, Document } from "mongoose";

interface User extends Document {
  clerkId: string;
  name: string;
  email: string;
  picture: string;
  password?: string;
  bio?: string;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: { type: String, required: true },
  password: { type: String },
  bio: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;
