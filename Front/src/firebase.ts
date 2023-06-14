
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChkXHSFLbyH3DNVZIo_wcAKTpCJ5-dzzg",
    authDomain: "sweet-home-a37d2.firebaseapp.com",
    projectId: "sweet-home-a37d2",
    storageBucket: "sweet-home-a37d2.appspot.com",
    messagingSenderId: "176297415072",
    appId: "1:176297415072:web:903daeb9aba9f8df8b94c5",
    measurementId: "G-EP6C10NVF2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider };
