export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, elem] of array.entries()) {
    array[idx] = appendString + elem
  }

  return array;
}