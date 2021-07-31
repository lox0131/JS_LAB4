import type { NextApiRequest, NextApiResponse } from "next";
import user_methods from "../../Models/user_methods";
import createHandler from "../../Middleware";
import handler from "./general";

const hander = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const userMethods = await user_methods.find({});
  res.status(200).json(userMethods);
});