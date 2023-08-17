import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { UserContext } from '../../contexts/user.context';
import { SignInContainer, ButtonsContainer } from './sign-in.styles';
import { 
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    email: "",
    password: ""
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    // const signInWithGoogle = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth( user )   
    // }

    const signInWithGoogle = async (vt) => {
        await signInWithGooglePopup();
    }
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user);
            resetFormFields();
        } catch(error) {
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('Incorrect password for email');
                  break;
                case 'auth/user-not-found':
                  alert('Theres no user associated with this email');
                  break;
                default:
                  console.log(error);
              }
        }
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setFormFields({ ...formFields, [name]:value })
    }
   
    return (
        <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
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
          <ButtonsContainer>
            <Button type='submit'>Sign In</Button>
            <Button
              buttonType={BUTTON_TYPE_CLASSES.google}
              type='button'
              onClick={signInWithGoogle}
            >
              Sign In With Google
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
}

export default SignInForm;