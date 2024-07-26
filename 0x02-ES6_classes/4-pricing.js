import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} ${this.currency.code}`;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(x) {
    if (typeof x !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = x;
  }

  set currency(x) {
    if (!(x instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = x;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
