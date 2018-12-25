import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyD480H_Ia0TtfX9oBjOeVXlVhf9iJGxojs",
    authDomain: "to-do-list-aceb0.firebaseapp.com",
    databaseURL: "https://to-do-list-aceb0.firebaseio.com",
    projectId: "to-do-list-aceb0",
    storageBucket: "to-do-list-aceb0.appspot.com",
    messagingSenderId: "871541176990"
}
firebase.initializeApp(config)

export const database = firebase.database()
