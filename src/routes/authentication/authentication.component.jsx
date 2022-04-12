import {React, useEffect} from "react";
//import { getRedirectResult } from "firebase/auth";
//import {signInWithGooglePopup, signInWithGoogleRedirect, auth, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = ()=>{

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

    //moved to sign in component
    // const logGoogleUser = async()=>{
    //     const {user} = await signInWithGooglePopup();  //destructuring to get only user object from response
    //     const userDocReference = await createUserDocumentFromAuth(user);
    // }
    
    return(<div className="authentication-container">
    
    {//<button onClick={logGoogleUser}>Sign in with google popup</button>
    //<button onClick={signInWithGoogleRedirect}>Sign in with google redirect (inactive)</button>
    }
    <SignInForm />
    <SignUpForm />
    </div>)
}

export default Authentication;