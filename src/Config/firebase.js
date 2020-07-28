import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyA0RftOUJUjJF7TraF4tacsGyXez_t_4Og",
    authDomain: "react-live-poll.firebaseapp.com",
    databaseURL: "https://react-live-poll.firebaseio.com",
    projectId: "react-live-poll",
    storageBucket: "react-live-poll.appspot.com",
    messagingSenderId: "124528463437",
    appId: "1:124528463437:web:8303f3baaff5c0eaf59604"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export {
    firebaseApp
};