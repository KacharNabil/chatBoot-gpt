import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Features from '../components/Features'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <NavBar/>
      < Hero />
      <div className="divider mt-[80px]">Features</div>
      <Features  />
      <Footer/>
    </div>
  )
}
