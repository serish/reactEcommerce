// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import{getFirestore, doc,getDoc, setDoc} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2DsvCIS1cNNsSazRQGR5FCLAW6W_AeWU",
  authDomain: "crown-cart-db.firebaseapp.com",
  projectId: "crown-cart-db",
  storageBucket: "crown-cart-db.appspot.com",
  messagingSenderId: "820950862590",
  appId: "1:820950862590:web:6a0437445087ec3e2c33af"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Authentication Related
const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);


//Firestore related
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInfo) => {
    const usersDocRef = doc(db, "users", userAuth.uid); //refrence to a document with id userAuth.id inside users collection
    const userSnapshot = await getDoc(usersDocRef); //returns reference even if document is not presnt.
    //console.log(userSnapshot.exists())   //returns false if thereis no document created. 

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth; //destructure these from userAuth;
        const createdAt = new Date();
        try{
            await setDoc(usersDocRef,{displayName,email,createdAt, ...additionalInfo});
        }catch(error){
            console.log('There was an error creating user',error.message);
        }
    }
    return userSnapshot;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);

}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);

}
