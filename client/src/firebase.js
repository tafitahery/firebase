import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'tutorial-375ff.firebaseapp.com',
  projectId: 'tutorial-375ff',
  storageBucket: 'tutorial-375ff.appspot.com',
  messagingSenderId: '475142867512',
  appId: '1:475142867512:web:1c489ab10eb2c85bab34cd',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
