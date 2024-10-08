export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = x;
  }

  set length(x) {
    if (typeof x !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = x;
  }

  set students(x) {
    if (x.isArray) {
      throw TypeError('Students must be an array of strings');
    }
    const strArray = x.every((studen) => typeof studen === 'string');
    if (!strArray) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = x;
  }
}
