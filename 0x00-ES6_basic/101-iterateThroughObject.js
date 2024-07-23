export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const [keys, empl] of reportWithIterator.entries()) {
    str += empl;
    if (keys !== reportWithIterator.length - 1) {
      str += ' | ';
    }
  }
  return str;
}
