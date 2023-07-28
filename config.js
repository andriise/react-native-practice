// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMvlxahjBH49oxF5h6GDVwTZ5ZqZQRGgQ",
  authDomain: "react-native-proj-2d21a.firebaseapp.com",
  databaseURL:
    "https://react-native-proj-2d21a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-proj-2d21a",
  storageBucket: "react-native-proj-2d21a.appspot.com",
  messagingSenderId: "996978766559",
  appId: "1:996978766559:web:f6b513e4c2a3093539af6a",
  measurementId: "G-9FQZNFDHE4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
