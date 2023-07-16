import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAZXSITrc0N1306Xsed8LvVlzuuJHL9PUw",
  authDomain: "dashboard-97fd6.firebaseapp.com",
  projectId: "dashboard-97fd6",
  storageBucket: "dashboard-97fd6.appspot.com",
  messagingSenderId: "688398438298",
  appId: "1:688398438298:web:e3ac7bd38e48782e41f423",
  measurementId: "G-8J6NY0W315"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
