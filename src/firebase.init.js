// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCDOSR1P7mF_wJaXZIAVKP0NC30TWd216Y',
	authDomain: 'ema-john-simple-928c9.firebaseapp.com',
	projectId: 'ema-john-simple-928c9',
	storageBucket: 'ema-john-simple-928c9.appspot.com',
	messagingSenderId: '217244228377',
	appId: '1:217244228377:web:c32eff70f69035e9b4c388',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
