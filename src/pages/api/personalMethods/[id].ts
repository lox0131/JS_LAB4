import type { NextApiRequest, NextApiResponse } from "next";
import user_methods from "../../../Models/user_methods";
import createHandler from "../../../Middleware/index";

const handler = createHandler();

handler.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  const MethodID = req.query.id
  await user_methods.findByIdAndDelete(MethodID);
  res.status(204)
});

export default handler