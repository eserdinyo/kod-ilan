import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBMBPiSvaZgfSWH_NjqW-L9QN-FzUm3NtQ",
    authDomain: "todoso-53bad.firebaseapp.com",
    databaseURL: "https://todoso-53bad.firebaseio.com",
    projectId: "todoso-53bad",
    storageBucket: "todoso-53bad.appspot.com",
    messagingSenderId: "49903120441",
    appId: "1:49903120441:web:11dfcaa1ccbd19c6"
}

firebase.initializeApp(config)

export const firebaseAuth = firebase.auth