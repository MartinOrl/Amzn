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

export const createUserProfileDocument = async (userAuth, additonalData) =>{

    //? Check if user exists/isLogged in
    if (!userAuth) return;
    
    //? Get UserDocument from firestore
    const userRef = db.doc(`users/${userAuth.uid}`)
  
    //? Get UserReferenceSnapshot from firestore
    const snapShot = await userRef.get()
  
    //? If snapshot doesn't exists execute this
    if(!snapShot.exists){
      const { email } = userAuth;
      const createdAt = new Date();
  
      //? Creating a new User and adding it to firestoreDB
      try{
        await userRef.set({
          email,
          createdAt,
          orders: [],
          ...additonalData
        })
      }
      catch (error){
        console.log("error creating user",error.message)
      }
    }
    return userRef
  }


export const AddItemsToDatabase = (user, cart) => {
  var userOrdersRef = db.collection('users').doc(`${user.id}`)
  cart.map(order =>{
    order = {
      ...order,
      timestamp: new Date()
    }
    userOrdersRef.update({
      orders: firebase.firestore.FieldValue.arrayUnion(order)
    })
    return ''
  })
}

export const auth = firebase.auth()