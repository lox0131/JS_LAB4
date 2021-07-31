import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
  },
);

const Users = mongoose.models.users || mongoose.model("users", UserSchema);
export default Users;
