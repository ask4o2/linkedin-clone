import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRZf5Tf2cTbydEyU2jOzX0Rjqilf8x-8s",
  authDomain: "linkedin-clone-31194.firebaseapp.com",
  projectId: "linkedin-clone-31194",
  storageBucket: "linkedin-clone-31194.appspot.com",
  messagingSenderId: "687079354716",
  appId: "1:687079354716:web:7a8fd485199ea0fd69d199",
  measurementId: "G-R8WMBVJY98",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
export default firebaseApp;
