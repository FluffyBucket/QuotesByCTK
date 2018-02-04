import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyANHhWPnramgDdojKPoMIb8-7znyj2Egec",
    authDomain: "quotes-cf430.firebaseapp.com",
    databaseURL: "https://quotes-cf430.firebaseio.com",
    projectId: "quotes-cf430",
    storageBucket: "quotes-cf430.appspot.com",
    messagingSenderId: "798259371752"
  };
var fire = firebase.initializeApp(config);

export default fire;