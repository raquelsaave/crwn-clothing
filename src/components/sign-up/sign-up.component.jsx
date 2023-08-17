import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignUpContainer } from './sign-up.styles';
// import { UserContext } from "../../contexts/user.context";


import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        if(password != confirmPassword) {
            alert("Passwords do not match!")
            return 
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
           
            await createUserDocumentFromAuth(user, { displayName })
            // setCurrentUser(user);
            resetFormFields();
        } catch(error) {
            console.log("Encounter an error ", error)
            if(error.code == "auth/email-already-in-use") {
                alert("Cannot create user, email already in use")
            } else {
                console.log("User creation encounter an error", error)
            }
        }
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setFormFields({ ...formFields, [name]:value })
    }
   
    return (
        <SignUpContainer>
          <h2>Don't have an account?</h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={handleSubmit}>
            <FormInput
              label='Display Name'
              type='text'
              required
              onChange={handleChange}
              name='displayName'
              value={displayName}
            />
    
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
    
            <FormInput
              label='Confirm Password'
              type='password'
              required
              onChange={handleChange}
              name='confirmPassword'
              value={confirmPassword}
            />
            <Button type='submit'>Sign Up</Button>
          </form>
        </SignUpContainer>
    );
}

export default SignUpForm;