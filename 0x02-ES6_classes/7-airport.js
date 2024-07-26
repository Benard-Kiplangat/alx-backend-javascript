export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = x;
  }

  get code() {
    return this._code;
  }

  set code(x) {
    if (typeof x !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = x;
  }

  get [Symbol.toStringTag](){
    return this.code;
  }
}