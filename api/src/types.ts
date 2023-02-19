import { UserWithoutPassword } from './user/interfaces/user-without-password.interface';

export interface JwtPayload {
  userId: number;
}

export interface RequestWithUser extends Request {
  user: UserWithoutPassword;
}
