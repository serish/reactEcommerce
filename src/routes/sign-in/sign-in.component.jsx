import {React, useEffect} from "react";
import { getRedirectResult } from "firebase/auth";
import {signInWithGooglePopup, signInWithGoogleRedirect, auth, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./sign-in.styles.scss";

const SignIn = ()=>{

    //useEffect used to get user details when they sign in with redirect.
    //useful when sign in with redirect is to be used to recive user details after recirect 
    // useEffect(async() => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocReference = await createUserDocumentFromAuth(response.user);
    //     }
    // },
    // []
    // )

    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();  //destructuring to get only user object from response
        //console.log(user);
        const userDocReference = await createUserDocumentFromAuth(user);
        //console.log(userDocReference);
    }
    
    return(<div>
    <h1>Sign In Page</h1>
    <button onClick={logGoogleUser}>Sign in with google popup</button>
    <button onClick={signInWithGoogleRedirect}>Sign in with google redirect (inactive)</button>
    <SignUpForm />
    </div>)
}

export default SignIn;