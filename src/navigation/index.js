// import React from 'react';
// import { useAuth } from '../hooks/useAuth';
// import UserStack from './userStack';
// import AuthStack from './authStack';

// export default function RootNavigation() {
//   const { user } = useAuth();

//   return user ? <UserStack /> : <AuthStack />;
// }

import React from "react";
import { AuthProvider } from "../hooks/AuthProvider";
import Routes from './Routes'
const Providers=()=>{
    return(
        <AuthProvider>
            <Routes/>            
        </AuthProvider>
    )
}

export default Providers;