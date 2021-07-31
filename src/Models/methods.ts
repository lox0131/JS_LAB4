import * as mongoose from "mongoose";

const MethodsSchema = new mongoose.Schema({
  categorie: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String
  },
  example : {
    type: String
  }
});

const Methods =  mongoose.models.methods || mongoose.model("methods", MethodsSchema);
export default Methods;
