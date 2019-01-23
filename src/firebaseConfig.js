import firebase from 'firebase'
const  config = {
    apiKey: "AIzaSyC7jic1on54na1rqXP-np0y4jbFCBm4gb0",
    authDomain: "todo-e8a15.firebaseapp.com",
    databaseURL: "https://todo-e8a15.firebaseio.com",
    projectId: "todo-e8a15",
    storageBucket: "todo-e8a15.appspot.com",
    messagingSenderId: "557279665039"
  };
  firebase.initializeApp(config);

export const database = firebase.database()


