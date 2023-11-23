import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase-config";
const Auth = () => {
  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button onClick={signIn}>Sign In With Google</button>
    </>
  );
};
export default Auth;
