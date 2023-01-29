// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkmU3p9XTSbrdOt6o5H0gS8nda-NrT_fQ",
  authDomain: "rcontact-6bb39.firebaseapp.com",
  projectId: "rcontact-6bb39",
  storageBucket: "rcontact-6bb39.appspot.com",
  messagingSenderId: "631175549034",
  appId: "1:631175549034:web:dd12b5d1bb15a1a249ba13",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
