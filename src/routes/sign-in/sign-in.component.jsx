import {
  auth,
  signInWithGooglePopup,
  createUserDocfromAuth,
  signWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocfromAuth(user);
    const userDocRef = await createUserDocfromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signWithGoogleRedirect();
    console.log(user);
  };

  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>Sign with Google</button>
      <button onClick={signWithGoogleRedirect}>
        Sign with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
