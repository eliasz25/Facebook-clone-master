import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAorphypu1P9Z4CkRCsYjEo3JEZfqtKepc",
  authDomain: "facebook-clone-d0766.firebaseapp.com",
  projectId: "facebook-clone-d0766",
  storageBucket: "facebook-clone-d0766.appspot.com",
  messagingSenderId: "805387119070",
  appId: "1:805387119070:web:310117e6323a5d962f954f",
  measurementId: "G-9Q72VX57NN"
};



const firebseApp = firebase.initializeApp(firebaseConfig)

const db= firebseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider }
export default db




