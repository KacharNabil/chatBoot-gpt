import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/login" element={ <Login/>} />
     <Route path="/register" element={ <Signup/>} />
     <Route path="/chat" element={ <Chat/>} />
     <Route path="/" element={ <Home/>} />
     <Route path="*" element={ <NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}
