import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBsUug1DWwwmsaOT7EO45aoNgSwFZw5fSk",
	authDomain: "test-c1102.firebaseapp.com",
	projectId: "test-c1102",
	storageBucket: "test-c1102.appspot.com",
	messagingSenderId: "904294510642",
	appId: "1:904294510642:web:232078685e015f3a2e0c2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);