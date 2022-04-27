import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface ExchangeItem {
  ccy: string
  base_ccy: string
  buy: string
  sale: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}

  exchangeUSD = <ExchangeItem>{}
  exchangeEUR = <ExchangeItem>{}

  ngOnInit(): void {
    this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .subscribe((data: any) => {
        this.exchangeUSD = JSON.parse(JSON.stringify(data[0]))
        this.exchangeEUR = JSON.parse(JSON.stringify(data[1]))
        console.log(this.exchangeUSD)
        console.log(this.exchangeEUR)
      })
  }
}
