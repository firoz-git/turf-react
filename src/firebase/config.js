import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCfdKhvvQIdTGIuGQxxqSgY8yvoogfLr3U",
    authDomain: "turf-44bde.firebaseapp.com",
    projectId: "turf-44bde",
    storageBucket: "turf-44bde.appspot.com",
    messagingSenderId: "757473145846",
    appId: "1:757473145846:web:6f9aa0fbd1789d8f788dd7",
    measurementId: "G-HKKZVQD3S0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
