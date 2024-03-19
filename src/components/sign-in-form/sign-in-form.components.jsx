import { useState } from "react";
import FormInput from "../form-input/form-input.components";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.components";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFielss = () => {
        setFormFields(defaultFormFields);
    }

    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
           const {user} = await signInAuthWithEmailAndPassword(email, password);
            resetFormFielss(user);       
            
        }catch (error){
            if (error.code = 'auth/invalid-credential'){
                alert('Incorrect Credentials');
            }
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
        <h2>Already have a Account</h2>
            <span>Sign in with your email and passwods</span>
            <form onSubmit={handleSubmit}>
    
            <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
            />
    
            <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
            />

            <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            
            </form>
        </div>
    );
};

export default SignInForm