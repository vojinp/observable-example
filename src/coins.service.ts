import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CoinsService {
    constructor(private httpService: HttpService) {}

    coins = new Subject<any>();
    coins$ =  this.coins.asObservable();

    getCoins(): void {
        this.httpService.get('https://jsonplaceholder.typicode.com/todos')
            .subscribe(res => this.coins.next(res));
    }
}
