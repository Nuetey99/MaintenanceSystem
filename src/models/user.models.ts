import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model<IUser>('Users', UserSchema);

export default User;