import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Features from '../components/Features'
import Footer from "../components/Footer"
import { useAuth } from "../context/AuthContext"
import Reviews from "../components/Reviews"

export default function Home() {
  console.log(useAuth());

  return (
    <div className="relative ove">
      <NavBar />
      < Hero />
      <div id="1">
        <h2 className="text-center text-5xl font-bold z-10">FEATURES</h2>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-[700px] h-[600px]  bg-blue-500 rounded-full  filter blur-3xl opacity-10"></div>
      <Features />
      <div className="mt-16">
        <h2 className="text-center text-5xl font-bold z-10">CUSTOMERS</h2>
      </div>
      <div id="2" className="flex justify-between mx-14 mt-16 z-10">
        <Reviews />
        <Reviews />
        <Reviews />
      </div>

      <Footer />
      
      <div className=" overflow-hidden  absolute  top-0 left-0 w-[700px] h-[600px] bg-purple-500 rounded-full  filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-1  w-[700px] h-[600px]  bg-[#5ce1e6] rounded-full  filter blur-3xl opacity-10"></div>
      <div className="absolute  bottom-0 left-20 w-[700px] h-[600px] bg-primary rounded-full  filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

     


    </div>
  )
}
