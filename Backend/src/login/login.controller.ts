import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { SignInDto } from './dto/signin.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  public async signin(@Body() signinDto: SignInDto): Promise<{ accessToken: string; user: UserEntity }> {
    console.log(signinDto);

    return this.loginService.signin(signinDto);
  }
}
