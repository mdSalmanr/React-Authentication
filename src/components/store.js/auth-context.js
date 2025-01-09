import React from "react";
import { useState } from "react";

const Auth = React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},

})



const AuthContextProvider = (props)=>{
    const[token,setToken] = useState(null);
    const userIsLoggin = !!token;

    const LoginHandler = (token)=>{
        setToken(token)
    }
    const LogOutHandler = ()=>{
        setToken(null);
    }
    const TokenValue = {
        token:token,
        isLoggedIn:userIsLoggin,
        login:LoginHandler,
        logout:LogOutHandler,
    }

   
    return<Auth.Provider value={TokenValue} >{props.children}</Auth.Provider>

}
export{Auth,AuthContextProvider}








