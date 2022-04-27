import {Component, Input} from '@angular/core';
import {ExchangeItem} from "../app.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()exchangeUSD = <ExchangeItem>{}
  @Input()exchangeEUR = <ExchangeItem>{}
}
