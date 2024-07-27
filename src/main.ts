import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { getConfig } from './config';

const { APP_PORT } = getConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(APP_PORT);
}
bootstrap();
