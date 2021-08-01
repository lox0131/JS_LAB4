import type { NextApiRequest, NextApiResponse } from "next";
import user_methods from "../../../Models/user_methods";
import createHandler from "../../../Middleware/index";

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const userMethods = await user_methods.find({});
  res.status(200).json(userMethods);
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const postedMethod = await user_methods.create(req.body);
  res.status(201).send(postedMethod);
});

export default handler