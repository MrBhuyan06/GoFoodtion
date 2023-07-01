import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBImWwcKub3x9m6xVJs-ZfSt6qcU0cLR2U",
  authDomain: "gofoodtionrestaurent.firebaseapp.com",
  databaseURL: "https://gofoodtionrestaurent-default-rtdb.firebaseio.com",
  projectId: "gofoodtionrestaurent",
  storageBucket: "gofoodtionrestaurent.appspot.com",
  messagingSenderId: "963653361278",
  appId: "1:963653361278:web:e28a2259caea3f6a66822f",
  measurementId: "G-5KFDG088HK",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
