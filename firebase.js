import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZgo61whygGN8Hv93USGINd19IqEcVGTA",
  authDomain: "ketemuenak-6ef49.firebaseapp.com",
  projectId: "ketemuenak-6ef49",
  storageBucket: "ketemuenak-6ef49.appspot.com",
  messagingSenderId: "244874537593",
  appId: "1:244874537593:web:45095c9a0355e1756502a8",
  measurementId: "G-6HS6G6E21Q",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export { storage, firebaseApp };
