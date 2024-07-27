import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PingModule } from './modules/ping/ping.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PingModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
