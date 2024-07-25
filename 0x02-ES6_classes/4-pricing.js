import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
    this.displayFullPrice = () => `${amount} ${currency.name} ${currency.code}`;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(x) {
    this._amount = x;
  }

  set currency(x) {
    this._currency = x;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
