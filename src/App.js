import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Reel from './pages/reels';
import Msg from './pages/message';
import Login from './pages/login';
import Sign_up from './pages/sign_up';
 
 

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/profile" element={<Profile/>}/>
        <Route path= "/reels" element={<Reel/>}/>
        <Route path= "/message" element={<Msg/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/sign_up" element={<Sign_up/>}/>
             
        </Routes>
    
    </BrowserRouter> 
  );
}

export default App;
