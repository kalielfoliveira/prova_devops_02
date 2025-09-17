import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  vegetarion: boolean;
}
