import * as mongoose from "mongoose";

const User_MethodsSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  methods: {
    type: Array,
  },
});

const Users_methods =
  mongoose.models.user_methods ||
  mongoose.model("user_methods", User_MethodsSchema);
  
export default Users_methods;
