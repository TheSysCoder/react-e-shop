import {
  signInWithGooglePopup,
  createUserDocfromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocfromAuth(user);
    const userDocRef = await createUserDocfromAuth(user);
  };

  return (
    <div>
      <h1>Sign IN</h1>
      <button onClick={logGoogleUser}>Sign with Google</button>
    </div>
  );
};

export default SignIn;
