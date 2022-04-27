import {Component, Input} from '@angular/core';
import {ExchangeItem} from "../app.component";

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {

  @Input()exchangeUSD = <ExchangeItem>{}
  @Input()exchangeEUR = <ExchangeItem>{}

  firstValue = 1
  secondValue = 1
  firstCurrency = 'UAH'
  secondCurrency = 'UAH'

  getConvertValue (value: string) {
    if (this.firstCurrency === 'UAH' && this.secondCurrency === 'USD') {
      value === 'first' ? this.secondValue = this.firstValue / Number(this.exchangeUSD.sale) : this.firstValue = this.secondValue * Number(this.exchangeUSD.sale)
    } else if (this.firstCurrency === 'UAH' && this.secondCurrency === 'EUR') {
      value === 'first' ? this.secondValue = this.firstValue / Number(this.exchangeEUR.sale) : this.firstValue = this.secondValue * Number(this.exchangeEUR.sale)
    } else if (this.firstCurrency === 'UAH' && this.secondCurrency === 'UAH') {
      value === 'first' ? this.secondValue = this.firstValue : this.firstValue = this.secondValue
    } else if (this.firstCurrency === 'USD' && this.secondCurrency === 'UAH') {
      value === 'first' ? this.secondValue = this.firstValue * Number(this.exchangeUSD.sale) : this.firstValue = this.secondValue * Number(this.exchangeUSD.sale)
    } else if (this.firstCurrency === 'USD' && this.secondCurrency === 'EUR') {
      value === 'first' ? this.secondValue = Number(this.exchangeUSD.sale) / Number(this.exchangeEUR.sale) : this.firstValue = Number(this.exchangeUSD.sale) / Number(this.exchangeEUR.sale)
    } else if (this.firstCurrency === 'USD' && this.secondCurrency === 'USD') {
      value === 'first' ? this.secondValue = this.firstValue : this.firstValue = this.secondValue
    } else if (this.firstCurrency === 'EUR' && this.secondCurrency === 'UAH') {
      value === 'first' ? this.secondValue = this.firstValue * Number(this.exchangeEUR.sale) : this.firstValue = this.secondValue * Number(this.exchangeEUR.sale)
    } else if (this.firstCurrency === 'EUR' && this.secondCurrency === 'USD') {
      value === 'first' ? this.secondValue = Number(this.exchangeUSD.sale) / Number(this.exchangeEUR.sale) : this.firstValue = Number(this.exchangeUSD.sale) / Number(this.exchangeEUR.sale)
    } else if (this.firstCurrency === 'EUR' && this.secondCurrency === 'EUR') {
      value === 'first' ? this.secondValue = this.firstValue : this.firstValue = this.secondValue
    }
  }

  getConvertResultFirst () {
    this.getConvertValue('first')
  }

  getConvertResultSecond () {
    this.getConvertValue('second')
  }

  handleFirstValue (value: number) {
    this.firstValue = value
    console.log(Number(this.exchangeUSD.sale))
    this.getConvertValue('first')
  }

  handleSecondValue (value: number) {
    this.secondValue = value
    this.getConvertValue('second')
  }
}
