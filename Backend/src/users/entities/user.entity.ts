import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  mail: string;
  password: string;
}
