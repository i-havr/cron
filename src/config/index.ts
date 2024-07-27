import { Expose, Type, plainToClass } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import 'dotenv/config';

export class ConfigDto {
  @Type(() => Number)
  @Expose()
  @IsInt()
  @IsNotEmpty()
  APP_PORT!: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  PING_URL_1!: string;
}

export const getConfig = (): ConfigDto => {
  const config = plainToClass(ConfigDto, process.env, {
    enableImplicitConversion: true,
    excludeExtraneousValues: true,
  });

  return config;
};
