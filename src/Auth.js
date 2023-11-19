import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./Config/firebase-config";
export const googleAuth = () => {
  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
    return (
      <>
        <div>
          <button onClick={signIn}>Sign In With Google</button>
        </div>
      </>
    );
  };
};
