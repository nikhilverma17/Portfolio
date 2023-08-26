import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
   apiKey: "AIzaSyB-1rxVG_5wv33S64YbSrHVY944hfd4uwg",
  authDomain: "portfolio-1dc56.firebaseapp.com",
  projectId: "portfolio-1dc56",
  storageBucket: "portfolio-1dc56.appspot.com",
  messagingSenderId: "902831527564",
  appId: "1:902831527564:web:eab1f8d6e21ef3be204da9",
  measurementId: "G-PBZ7FML4ND"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
