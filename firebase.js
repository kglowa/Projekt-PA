// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*export function  addReservation(reservation, addComplete){
    firebase.firestore().collection('Reservations')
        .add({
            name: reservation.name,
            surname: reservation.surname,
            table_number: reservation.table_number,
            date: reservation.date,
        }).then((data) => addComplete(data))
        .catch((error) => console.log(error));
}*/

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2_JWhWRxvUkp3P1yWgi1_AJxf3gq2a7U",
    authDomain: "fir-auth-3981e.firebaseapp.com",
    projectId: "fir-auth-3981e",
    storageBucket: "fir-auth-3981e.appspot.com",
    messagingSenderId: "345098788126",
    appId: "1:345098788126:web:512e28583863cb39297d0f"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };