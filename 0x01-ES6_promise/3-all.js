import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const resUP = uploadPhoto();
  const resCU = createUser();

  return Promise
    .all([resUP, resCU])
    .then((resolve) => {
      console.log(`${resolve[0].body} ${resolve[1].firstName} ${resolve[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
