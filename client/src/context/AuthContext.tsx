import { ReactNode, createContext } from "react";
import { useState, useEffect } from "react";

type User ={
    name:string,
    email:string
};


type UserAuth = {
    isLoggedIn : boolean,
    User: User | null,
    login: (email:string, password:string)=>void,
    logout: ()=>void,
    signup: (name:string,email:string, password:string)=>void,
}



const AuthContext = createContext<UserAuth | null>(null);

const AuthProvider = ({children} : {children: ReactNode}) =>{
     const [User, setUser] = useState<User | null>(null);
     const [isLoggedIn, setIsloggedIn] = useState(false);
     useEffect(() => {
       // if the users cookies are valid then skip login
     }, []);

     const login = (email:string, password:string) => {
        
     };
     const signup = (name:string,email:string, password:string) => {
        
     };
     const logout = () => {
        
     };

     const value: UserAuth | null  = {
        User,
        isLoggedIn,
        login,
        signup,
        logout
     };

     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>



}