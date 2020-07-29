import { user } from "./auth.js";
import db from "../../firebase.config";

const getUserData = async () => {
  const id = user().uid;
  return db.collection("users").doc(id);
};
const getWaitersData = async () => {
  return await db.collection("users");
};

const getChefsData = async () => {
  return db.collection("users");
};

const getClientsData = async () => {
  return db.collection("clients");
};

export { getUserData, getWaitersData, getClientsData, getChefsData };
