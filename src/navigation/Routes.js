import React,{useContext,useEffect,useState} from "react";
import {NavigationContainer} from '@react-navigation/native'
import { AuthContext } from "../hooks/AuthProvider";
import auth from '@react-native-firebase/auth';

import AuthStack from './authStack'
import AppStack from './userStack'


const Routes=()=>{
    const {user,setUser}=useContext(AuthContext);
    const {initializing,setInitializing}=useState(true);
    const onAuthStateChanged=(user)=>{
        setUser(user);
       if(initializing) setInitializing(false);
    }
    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    },[])
    if(initializing) return null

    return (
        <NavigationContainer>
            {user?<userStack/>:<AuthStack/>}
        </NavigationContainer>
    )
}
export default Routes