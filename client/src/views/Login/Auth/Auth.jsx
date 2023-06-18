import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "./FireBase";

const AuthenticationComponent = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Log in with Google</button>
      <button onClick={handleSignInWithGitHub}>Log in with GitHub</button>
    </div>
  );
};

export default AuthenticationComponent;
