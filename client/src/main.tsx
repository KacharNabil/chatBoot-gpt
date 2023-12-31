import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import './index.css'
import axios from 'axios';
import { Toaster } from 'react-hot-toast'




axios.defaults.baseURL='http://localhost:5000/api/v1';
axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
      <Toaster position='top-right'/>
        <App />
      </main>
    </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>,
)
