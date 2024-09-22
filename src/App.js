import  React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Reel from './pages/reels';
import Msg from './pages/message';
import Login from './pages/login';
import Sign_up from './pages/sign_up';
import Explore from './pages/explore';
import Protected from './componet/protected';
 
 

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
        <Routes>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/sign_up" element={<Sign_up/>}/>
        <Route path= "/" element={
        <Protected  isSignedIn= {isSignedIn} >
            <Home/>
          </Protected>}/>
        <Route path= "/profile" element={
          <Protected  isSignedIn= {isSignedIn}>
              <Profile/>
          </Protected>}/>
        <Route path= "/reels" element={
          <Protected  isSignedIn= {isSignedIn}>
             <Reel/>
          </Protected>}/>
        <Route path= "/message" element={
          <Protected  isSignedIn= {isSignedIn}>
            <Msg/>
            </Protected>}/>
        <Route path= "/explore" element={
          <Protected isSignedIn= {isSignedIn}>
             <Explore/>
            </Protected>}/>
             
        </Routes>
    
    </BrowserRouter> 
  );
}

export default App;
