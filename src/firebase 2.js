import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8snjmpAG5S0FLXzV4UnyIbGE3W_TmZWE",
  authDomain: "idobatakigi-with-ham.firebaseapp.com",
  databaseURL: "https://idobatakigi-with-ham-default-rtdb.firebaseio.com",
  projectId: "idobatakigi-with-ham",
  storageBucket: "idobatakigi-with-ham.appspot.com",
  messagingSenderId: "742942052699",
  appId: "1:742942052699:web:7c9eadf2e45d8a88af8a7e"
};
  
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

const messagesRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
    messagesRef.push({name, text});
}