export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const n = true;
    if (n) {
      resolve("Yey! it's true!");
    } else {
      reject(Error('It failed :('));
    }
  });
}
