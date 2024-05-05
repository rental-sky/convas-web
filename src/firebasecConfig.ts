import { initializeApp } from 'firebase/app';
import {
  getAnalytics,
  logEvent,
  isSupported,
  Analytics,
} from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'; // DB
import { getFunctions } from 'firebase/functions'; // Funcs
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// FIXME: move to .env
const firebaseConfig = {
  apiKey: 'AIzaSyBW4KBZcTukS9KaktU4Ewff73FE-OtVnxM',
  authDomain: 'covans-69be2.firebaseapp.com',
  projectId: 'covans-69be2',
  storageBucket: 'covans-69be2.appspot.com',
  messagingSenderId: '755422879991',
  appId: '1:755422879991:web:27d5a2cf7b9d481264b3f2',
  measurementId: 'G-0YWFW5Q99N',
};

let isInitailized = false;
let analytics: Analytics | null = null;

const initializeAnalytics = async () => {
  if (isInitailized) return analytics;

  analytics = await isSupported().then((yes) =>
    yes ? getAnalytics(app) : null
  );
  isInitailized = true;
  return analytics;
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAnalytics();

const db = getFirestore(app);

const functions = getFunctions(app);

const track = (eventName: string, data: any) => {
  if (!analytics) return console.error('Analytics not supported');
  logEvent(analytics, eventName, data);
};

export { db, functions, track };
