import type { Role } from '@prisma/client';

// คุณไม่จำเป็นต้อง import หรือ require express-serve-static-core เลย
declare namespace Express {
  export interface Request {
    user: {
      id: number;
      role: Role;
    };
  }
}