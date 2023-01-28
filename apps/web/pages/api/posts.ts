import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany();
  return res.json(posts);
};

export default handler;
