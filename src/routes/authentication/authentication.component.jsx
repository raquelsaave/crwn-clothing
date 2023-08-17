// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { AuthenticationContainer } from './authentication.styles';

import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

const Authentication = () => {

    // useEffect(async ()=> {
    //     const response = await getRedirectResult(auth);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    //     console.log(response)
    // },[])

// const logGoogleRedirectUser = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     // const userDocRef = await createUserDocumentFromAuth( user )
//     console.log(user)
// }

    return (
        <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
        </AuthenticationContainer>
    );
}

export default Authentication;