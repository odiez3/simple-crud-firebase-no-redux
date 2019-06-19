//Cambialo por tu proyecto en firebase.
export const firebaseConfig = {
    apiKey: "AIzaSyBb1H45Qg5H9v0fntRRi27OjkzEIJLCSZc",
    authDomain: "ditocodeexamples.firebaseapp.com",
    databaseURL: "https://ditocodeexamples.firebaseio.com",
    projectId: "ditocodeexamples",
    storageBucket: "ditocodeexamples.appspot.com",
    messagingSenderId: "96482041943",
    appId: "1:96482041943:web:5f6ccb2fd172d6d9"
}


const ERROR_CODES = {
    "auth/invalid-email":"Introduzca un correo electrónico válido.",
    "auth/user-disabled":"Su usuario ha sido inhabilitado.",
    "auth/user-not-found":"Usuario no encontrado.",
    "auth/wrong-password":"Contraseña no válida.",
}


export function getError(error){
    if (ERROR_CODES[error.code]){
        return ERROR_CODES[error.code]
    }else{
        return error.message
    }
}