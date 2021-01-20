import firebase from "firebase/app";
import "firebase/firestore";


const apiKey = process.env.REACT_APP_APIKEY
const appId = process.env.REACT_APP_appId
const authDomain = process.env.REACT_APP_authDomain
const messagingSenderId = process.env.REACT_APP_messagingSenderId
const projectId = process.env.REACT_APP_projectId
const storageBucket = process.env.REACT_APP_storageBucket

const config = {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId}

//Esta funcion me da una instancia de la App ya inicializada
const app = firebase.initializeApp(config)

/* 
export const getFiresbase = () => {
    return app
} 
*/


//Esta funcion me da una instancia de Firestore
//export const firestore = firebase.firestore(app)

export const getFirestore = () => {
    return firebase.firestore(app)
}