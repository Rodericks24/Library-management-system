
import {Routes,Route} from 'react-router-dom';
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import Main from "./components/dashboard";
import { UserContextProvider } from "../src/context/userContext";
import AddBook from './components/addbooks';
import Admin from './components/admin';
import AdminDashboard from './components/admindashboard';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

export default function App() {
  return (
    <>
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{duration:1000}}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<Main/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/createbook" element={<AddBook/>}/>
      </Routes>
      </UserContextProvider>
    </>
  );
}
