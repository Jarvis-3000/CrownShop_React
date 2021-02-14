//include firebase modules
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//add firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiX_W5VQ-Lwtb4f2-C4iLWk5lL2SOUCNY",
    authDomain: "crown-db-df61e.firebaseapp.com",
    projectId: "crown-db-df61e",
    storageBucket: "crown-db-df61e.appspot.com",
    messagingSenderId: "28994237363",
    appId: "1:28994237363:web:a690768ba9042e811ad1c6",
    measurementId: "G-TPYC654BRD"
}

//initialize firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


var provider = new firebase.auth.GoogleAuthProvider();
//to always popup the signin window
provider.setCustomParameters({ prompt: 'select_account' })

// export const GmailSign=()=>auth.signInWithPopup()

export const GmailSign = () => {

    // if big window then popup else redirect 
    if (window.innerWidth <= 700)
        firebase.auth().signInWithRedirect(provider)
    else
        firebase.auth().signInWithPopup(provider)

    // .then((result) => {
    //     /** @type {firebase.auth.OAuthCredential} */
    //     var credential = result.credential;

    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user
    //     console.log("user   ",user)

    //     // return {
    //     //     credential,
    //     //     token,
    //     //     user
    //     // }

    //     // ...
    // }).catch((error) => {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;

    //     console.log(errorCode,errorMessage,email,credential)

    //     // return {
    //     //     errorCode,
    //     //     errorMessage,
    //     //     email,
    //     //     credential
    //     // }
    //     // ...
    // });
    // }
}



export default firebase