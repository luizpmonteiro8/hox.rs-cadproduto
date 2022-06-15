import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @IsEmail({}, { message: 'O email deve ser válido.' })
  email: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazio.' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  @IsString({ message: 'A senha não pode ser vazio.' })
  password: string;
}
