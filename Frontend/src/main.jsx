import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import AuthContext from './Context-Api/AuthContext.jsx'
import UserContext from './Context-Api/UserContext.jsx'
import { AdminProvider } from './Context-Api/AdminContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
    <AdminProvider>
    <UserContext>
    <App/>
    </UserContext>
    </AdminProvider>
    </AuthContext>
   </BrowserRouter>
   
)
