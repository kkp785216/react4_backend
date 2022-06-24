// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app')
const firebaseConfig = require('./config')
const { getFirestore } = require('firebase/firestore');

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbc = getFirestore(app);

module.exports = dbc