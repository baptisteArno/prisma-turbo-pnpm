import { PrismaClient } from "db";

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

const prisma: PrismaClient = prismaGlobal.prisma || new PrismaClient();

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

export default prisma;
