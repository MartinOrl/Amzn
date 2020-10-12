import firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBnoFTBDThiBYZV9NGDjz8468lMkaze8xA",
    authDomain: "amzn-185d6.firebaseapp.com",
    databaseURL: "https://amzn-185d6.firebaseio.com",
    projectId: "amzn-185d6",
    storageBucket: "amzn-185d6.appspot.com",
    messagingSenderId: "733833622944",
    appId: "1:733833622944:web:b6a166fed7f83dfd7720c5"
}

const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.firestore();
export const auth = firebase.auth()