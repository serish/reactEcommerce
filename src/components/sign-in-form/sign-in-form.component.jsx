import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";

const defaultformFields = {
    email: '',
    password: ''
}



const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultformFields);
    const { email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultformFields);
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async()=>{
            const {user} = await signInWithGooglePopup();  //destructuring to get only user object from response
            await createUserDocumentFromAuth(user);
        }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        }catch(error){
            if(error.code === "auth/wrong-password"){
                alert("Incorrect Password");
            }else if(error.code === "auth/user-not-found"){
                alert("Email not found");
            }else{
                console.log(error.code);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                
                <div className="buttons-container">
                    <CustomButton buttonType="default" type="submit">Sign In</CustomButton>
                    <CustomButton type='button' buttonType="google-sign-in" onClick={signInWithGoogle}>Google Sign In</CustomButton>
                </div>
                
            </form>
        </div>)
}

export default SignInForm;