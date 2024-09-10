import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, 
    sendPasswordResetEmail, 
signInWithEmailAndPassword, 
signOut} from "firebase/auth"
import { createContext } from "react";
import auth from "../Firebase/Firebase.config"

export const AuthContext = createContext(null)

const AuthProvider = ({children})=>{
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)


    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIN = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetEmail = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const emailVerification = ()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser)
             console.log("Observing Current User ", currentUser)
             setLoading(false)
         })
         return ()=>{
             unsubscribe()
         }
     },[])
    const userInfo = {user, createUser, loading, signIN, resetEmail, emailVerification, logOut}
    return(
        <AuthContext.Provider value={userInfo}>
                {children}
        </AuthContext.Provider> 

    )
}
export default AuthProvider;