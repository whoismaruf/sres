import { initializeApp } from "@firebase/app";
import firebaseConfig from "./FIrebase";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;