import { Input } from "@nextui-org/react";
import Lottie ,{LottieRefCurrentProps} from "lottie-react";
import animationData from '../assets/Animation - 1703616186943.json'
import { useRef } from "react";


export default function Login() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
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
            <form className="card-body">
              <h1 className="text-center text-2xl font-bold">Login</h1>
              <div className="form-control mt-4">
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  className="max-w-xs bg-transparent"
                  variant="bordered"
                />
              </div>
              <div className="form-control mt-8">
                <Input
                  isRequired
                  type="password"
                  label="Password"
                  className="max-w-xs bg-transparent"
                  variant="bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
