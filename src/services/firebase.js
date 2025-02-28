import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getReactNativePersistence,
} from 'firebase/auth';

import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCe3KcJzGEW_vYPesbnBTZpZtxp7tZxgq4",
    authDomain: "ingejei.firebaseapp.com",
    projectId: "ingejei",
    storageBucket: "ingejei.firebasestorage.app",
    messagingSenderId: "40651479475",
    appId: "1:40651479475:web:d3eefb682ca060aff093c6"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export {
  auth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
