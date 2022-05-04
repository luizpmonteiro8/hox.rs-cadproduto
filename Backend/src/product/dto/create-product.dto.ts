import { Type } from 'class-transformer';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumberString, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString({ message: 'O nome deve ser um texto.' })
  name: string;

  @IsNotEmpty({ message: 'A data de fabricação não pode ser vazio.' })
  @IsDateString()
  productionDate: Date;

  @IsBoolean()
  perishableProduct: boolean;

  @IsOptional()
  @IsDateString()
  expirationDate: Date;

  @IsNotEmpty({ message: 'O preço não pode ser vazio.' })
  @Type(() => Number)
  @IsPositive({ message: 'O preço deve ser maior que zero.' })
  price: number;
}
