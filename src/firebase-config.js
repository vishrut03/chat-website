// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnvgctvv2XhUfFBRnzEmqMx2S_BYzvJPw",
    authDomain: "chat-app-42a55.firebaseapp.com",
    projectId: "chat-app-42a55",
    storageBucket: "chat-app-42a55.appspot.com",
    messagingSenderId: "1082298091637",
    appId: "1:1082298091637:web:6fc33dd7a20c488945503c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);