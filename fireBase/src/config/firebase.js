import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBaT7VebcyZoDHUjpS_rMUstXmvf8RSH38",
  authDomain: "fir-course-f99e0.firebaseapp.com",
  projectId: "fir-course-f99e0",
  storageBucket: "fir-course-f99e0.appspot.com",
  messagingSenderId: "876319826718",
  appId: "1:876319826718:web:ad9be11793a31cb2575f0f",
  measurementId: "G-THMZWB0CKQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)