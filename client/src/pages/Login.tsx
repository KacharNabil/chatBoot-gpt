import { Input } from "@nextui-org/react";
import Lottie ,{LottieRefCurrentProps} from "lottie-react";
import animationData from '../assets/Animation - 1703616186943.json'
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";


export default function Login() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth?.login(email, password);
      console.log("After login:", auth?.isLoggedIn);
      toast.success("Signed In Successfully", { id: "login" });
    } catch (error : any) {
      const errorMessage = error?.response?.data || "Signing In Failed";
      toast.error(errorMessage, { id: "login" });
    }
  };
  

  console.log({email,password});
  
  console.log(auth?.isLoggedIn);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content gap-4 flex-row-reverse items-center">
        <div className="w-[50%]">
          <Lottie
          className="h-[350px] w-[500px]" 
          onComplete={ ()=>{
            phoneRef.current?.goToAndPlay(45,true)
          }

          }
          loop={false}
          lottieRef={phoneRef}
          animationData={animationData}/>
        </div>
        <div className="w-[50%]">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <h1 className="text-center text-2xl font-bold">Login</h1>
              <div className="form-control mt-4">
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  className="max-w-xs bg-transparent"
                  variant="bordered"
                  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-control mt-8">
                <Input
                  isRequired
                  type="password"
                  label="Password"
                  className="max-w-xs bg-transparent"
                  variant="bordered"
                  onChange={(e)=>{
                      setPassword(e.target.value);
                  }}  
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white" type="submit">Login</button>
              </div>
              <span className="text-center mt-2">Don't have an account?<Link to='/register' className="text-primary"> Sign up</Link></span>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
