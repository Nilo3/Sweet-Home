import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider} from './FireBase'

const AuthenticationComponent = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Iniciar sesión con Google</button>
      <button onClick={handleSignInWithGitHub}>Iniciar sesión con GitHub</button>
    </div>
  );
};

export default AuthenticationComponent;