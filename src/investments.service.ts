import { Injectable } from '@nestjs/common';
import { CoinsService } from './coins.service';

@Injectable()
export class InvestmentsService {
    constructor(private coinsService: CoinsService) {
    }

    subscription = this.coinsService.coins$.subscribe((res) => console.log(res));
}
