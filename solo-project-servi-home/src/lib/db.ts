import { PrismaClient, Prisma } from '@prisma/client';
import { PrismaClientOptions } from '@prisma/client/runtime/library';

//const globalForPrisma = global as unknown as { prisma: PrismaClient };

//let prisma = globalForPrisma.prisma || new PrismaClient();

//if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

const prisma = new PrismaClient()


export const db = prisma;
