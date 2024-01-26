// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDj0Xqe-zFGyrEUpsNzXv0CUxgHCto9XiM",
  authDomain: "my-portfolio-65091.firebaseapp.com",
  projectId: "my-portfolio-65091",
  storageBucket: "my-portfolio-65091.appspot.com",
  messagingSenderId: "386604185650",
  appId: "1:386604185650:web:beeaea3e9edcf1c9b4642b",
  measurementId: "G-3J60PSWGMQ"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app)
// const analytics = getAnalytics(app);
