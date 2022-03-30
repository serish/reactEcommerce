import React from "react";
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

import "./sign-in.styles.scss";

const SignIn = ()=>{
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();  //destructuring to get only user object from response
        //console.log(user);
        const userDocReference = await createUserDocumentFromAuth(user);
        //console.log(userDocReference);
    }
    return(<div>
    <h1>Sign In Page</h1>
    <button onClick={logGoogleUser}>Sign in with google</button>
    </div>)
}

export default SignIn;