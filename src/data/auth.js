import { auth } from "../../firebase.config";

export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const user = () => auth().currentUser;

export const loginUser = (email, password) =>
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      return user;
    })
    .catch(error => console.error(error));

export const userStatus = () =>
  auth.onAuthStateChanged(userExist => {
    if (!userExist) {
      return "Usuario no existe";
    }
    return userExist;
  });

export const logOut = () => auth.signOut();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};
