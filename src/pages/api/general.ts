import type { NextApiRequest, NextApiResponse } from "next";
import Method from "../../Models/methods";
import createHandler from "../../Middleware";

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const methods = await Method.find({});
  res.status(200).json(methods);
});

export default handler;
