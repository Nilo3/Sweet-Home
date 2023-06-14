import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider, facebookProvider } from './firebase';

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

  const handleSignInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleSignInWithGoogle}>Iniciar sesión con Google</button>
      <button onClick={handleSignInWithGitHub}>Iniciar sesión con GitHub</button>
      <button onClick={handleSignInWithFacebook}>Iniciar sesión con Facebook</button>
    </div>
  );
};

export default AuthenticationComponent;

