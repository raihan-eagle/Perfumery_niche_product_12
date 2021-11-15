import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});   
    const [isLoading, setIsLoading] = useState(true); 
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
        //   const user = userCredential.user;
          // ...
          saveUser(email) //change here
        })
        .catch((error) => {
          setAuthError(error.message);

          // ..
        })
        .finally(()=>setIsLoading(false))
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
          // ..
        })
        .finally(()=>setIsLoading(false))
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        
        return () => unsubscribed();
    }, [auth]) 
    // auth added

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)                       
     }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => setIsLoading(false));

    }
    const saveUser =(email) =>{
            const user = {email};
            fetch('https://powerful-depths-82675.herokuapp.com/users',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            }).then()
    }

    useEffect(()=>{
        
        fetch(`https://powerful-depths-82675.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin)
        })
        
        
    },[user.email])

    return {
        user,
        admin,
        registerUser,
        loginUser,
        setUser,
        signInWithGoogle,
        logOut,
        isLoading, setIsLoading,
        authError
    }
}

export default useFirebase;