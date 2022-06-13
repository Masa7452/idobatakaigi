import firebase from 'firebase';

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID
} = process.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};
  
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
    messagesRef.push({name, text});
}