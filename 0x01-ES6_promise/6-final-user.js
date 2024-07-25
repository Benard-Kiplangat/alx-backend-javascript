import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promiseSUU = signUpUser(firstName, lastName);
  const promiseUP = uploadPhoto(fileName);

  return Promise.allSettled([promiseSUU, promiseUP])
    .then((res) => res
      .map((obj) => {
        const val = obj.status === 'fulfilled' ? obj.value : obj.reason;
        return { status: obj.status, value: val };
      }));
}
