import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyC0Fa2dy56vsbZ57ODJEKT4umxqzLp5-gE",
    authDomain: "cachaca-b185c.firebaseapp.com",
    databaseURL: "https://cachaca-b185c.firebaseio.com",
    storageBucket: "cachaca-b185c.appspot.com",
    messagingSenderId: "741680560582"
  };
  
firebase.initializeApp(config);

const root = firebase.database().ref();
const bottles = firebase.database().ref('bottles');

const Fb = {
  root,
  bottles
};
export { Fb };