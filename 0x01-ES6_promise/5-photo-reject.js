export default function uploadPhoto(filename) {
  const err = `${filename} cannot be processed`;

  return new Promise((reject) => {
    reject(new Error(err));
  });
}
