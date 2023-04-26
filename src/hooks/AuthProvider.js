/* eslint-disable prettier/prettier */
import React,{createContext,useState} from  'react';
import auth from '@react-native-firebase/app';
export const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    return (
        <AuthContext.Provider
         value={{
            user,
            setUser,
            login:async(email,password)=>{
                try {
                    await auth().signInWithEmailAndPassword(email,password);
                }
                catch (e){
                    console.log(e,"auth");
                }
            },
            register:async(email,password)=>{
                try {
                    await auth().createUserWithEmailAndPassword(email,password);
                }
                catch (e){
                    console.log(e,'register');
                }
            },
            logout:async(email,password)=>{
                try {
                    await auth().signOut();
                }
                catch (e){
                    console.log(e);
                }
            }
         }}
         >
            {children}
        </AuthContext.Provider>
    );
};

