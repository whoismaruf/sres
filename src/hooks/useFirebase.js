import initializeAuthentication from "../config/FirebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    
    // Sign in with Google button handler
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
            console.log(result.user);
        })
        .catch(error => {
            setError(error);
            console.log(error);
        })
    }
    
    // Default logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('on auth state changed', user);
                setUser(user);
            }
        })
    }, [auth])

    return {
        user,
        error,
        logout,
        signInWithGoogle
    }
}

export default useFirebase;