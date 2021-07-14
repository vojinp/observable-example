import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CoinsService } from './coins.service';
import { InvestmentsService } from './investments.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly coinsService: CoinsService) {}

  @Get()
  getHello(): string {
    this.coinsService.getCoins();
    return 'Hello world!'
  }
}
