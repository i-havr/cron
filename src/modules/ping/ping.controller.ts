import { Controller, Get } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { PingService } from './ping.service';

@Controller('api/ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  @Get('health-check')
  async healthCheck() {
    return 'Server PING is running...';
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async tapCron() {
    console.log('PING start...', new Date().toLocaleTimeString());
    const res = await this.pingService.ping();
    console.log(res);
  }
}
