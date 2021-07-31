import { ObjectID } from "mongodb";
import * as mongoose from "mongoose";

const User_MethodsSchema = new mongoose.Schema({
  userID: {
    type: ObjectID,
    required: true,
  },
  methodsID: {
    type: ObjectID,
    required: true,
  },
  user_note: {
    type: String
  }
});

const Users_methods =
  mongoose.models.user_methods ||
  mongoose.model("user_methods", User_MethodsSchema);
  
export default Users_methods;
