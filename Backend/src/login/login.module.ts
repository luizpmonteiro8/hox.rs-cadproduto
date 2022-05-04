import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginRepository } from './repositories/login.repository';
import { AuthService } from 'src/auth/auth.service';
import { LoginController } from './login.controller';
import { UserRepository } from 'src/users/repositories/user.repository';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService, LoginRepository, AuthService, UserRepository],
})
export class LoginModule {}
