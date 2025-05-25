import { Role } from '@prisma/client';
import 'express';

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number;
        role: Role;
      };
    }
  }
}

// บังคับให้ไฟล์นี้เป็น module
export {};