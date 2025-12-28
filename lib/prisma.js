import { PrismaClient } from "@prisma/client";

// Use a global variable to prevent multiple instances during hot reloads
let prisma;

if (!globalThis.prisma) {
  prisma = new PrismaClient({}); // explicitly pass options
  globalThis.prisma = prisma;
} else {
  prisma = globalThis.prisma;
}

export const db = prisma;
