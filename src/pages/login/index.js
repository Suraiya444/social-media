import React from 'react'
import LayOut from '../../layouts/layout'

function Login(){
    return(
        <LayOut>
             <div className="container">
                <div className="login">
                    <div className="images d-none d-lg-block">
                        <div className="frame">
                            <img src="./assets/images/home-phones.png" alt="picutre frame"/>
                        </div>
                        <div className="sliders">
                            <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./assets/images/screenshot1.png" className="d-block" alt="screenshot1"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/screenshot2.png" className="d-block" alt="screenshot2"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/screenshot3.png" className="d-block" alt="screenshot3"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/screenshot4.png" className="d-block" alt="screenshot4"/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="content">
                        <div className="log-on border_insc">
                            <div className="logo">
                                <img src="./assets/images/logo.png" alt="Instagram logo"/>
                            </div>
                            <form>
                                <div>
                                    <input type="email" name="email" id="emai" placeholder="e-mail"/>
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="password"/>
                                </div>
                                
                            </form>
                            <a href="./home.html">
                                <button className="log_btn">
                                    Log in
                                </button>
                            </a>
                            <div className="other-ways">
                                <div className="seperator">
                                    <span className="ligne"></span>
                                    <span className="ou">OR</span>
                                    <span className="ligne"></span>
                                </div>
                                <div className="facebook-connection">
                                    <a href="#">
                                        <img src="./assets/images/facebook.png" alt="facebook icon"/>
                                        Log in with Facebook
                                    </a>
                                </div>
                                <div className="forget-password">
                                    <a href="#">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sing-up border_insc">
                            <p>
                                Don't have an account? 
                                <a href="./sign_up.html">Sign up</a>
                            </p>
                        </div>
                        
                    </div>
                </div>
    </div>
        </LayOut>
    )
    
}
export default Login;