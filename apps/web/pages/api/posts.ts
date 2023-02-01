import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.post.findMany();
  return res.json(["hello", "world"]);
};

export default handler;
