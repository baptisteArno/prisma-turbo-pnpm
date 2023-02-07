import { PostgresqlPrismaClient, MysqlPrismaClient } from "db";

const prismaGlobal = global as typeof global & {
  prisma?: PostgresqlPrismaClient;
};

const prisma: any =
  prismaGlobal.prisma ||
  (process.env.DATABASE_URL?.startsWith("mysql")
    ? new MysqlPrismaClient()
    : new PostgresqlPrismaClient());

// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = prisma;
}

export default prisma;
