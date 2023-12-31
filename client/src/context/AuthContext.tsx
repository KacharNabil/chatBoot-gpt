import { ReactNode, createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { loginUser } from "../api/api-communicator";

type User ={
    name:string;
    email:string;
};


type UserAuth = {
    isLoggedIn : boolean;
    User: User | null;
    login: (email:string, password:string)=>Promise<void>;
    logout: ()=>Promise<void>;
    signup: (name:string,email:string, password:string)=>Promise<void>;
}



const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({children} : {children: ReactNode}) =>{
     const [User, setUser] = useState<User | null>(null);
     const [isLoggedIn, setIsloggedIn] = useState(false);
     useEffect(() => {
       // if the users cookies are valid then skip login
     }, []);

     const login = async (email: string, password: string) => {
      try {
        const data = await loginUser(email, password);
        setIsloggedIn(true);
        setUser({ name: data.name, email: data.email });
       
      } catch (error) {
        setIsloggedIn(false);
        console.log(error);
        setUser(null);
        throw error; // Make sure to reset the user state on login failure
        
      }
    };
     const signup = async (name:string,email:string, password:string) => {
        
     };
     const logout = async () => {
        
     };

     const value: UserAuth | null  = {
        User,
        isLoggedIn,
        login,
        signup,
        logout,
     };

     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>



}

export const useAuth = ()=>useContext(AuthContext);