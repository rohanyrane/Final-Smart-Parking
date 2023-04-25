/* eslint-disable prettier/prettier */
import react,{createContext,useState} from 'react';
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
                    console.log(e);
                }
            },
            register:async(email,password)=>{
                try {
                    await auth().createUserWithEmailAndPassword(email,password);
                }
                catch (e){
                    console.log(e);
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
