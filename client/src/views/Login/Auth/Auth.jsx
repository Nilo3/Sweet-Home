import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./FireBase";

const AuthenticationComponent = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Log in with Google</button>
    </div>
  );
};

export default AuthenticationComponent;
