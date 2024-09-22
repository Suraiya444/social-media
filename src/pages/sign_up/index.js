import AuthLayout from '../../layouts/authlayout';
import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { register } from '../../Api/AllApi';
 function Sign_up(){
    const [inputs, setInputs] = useState([]);
    const navigate=useNavigate();

    // let signup = async(inputs) => {
    //     await register(inputs);
    //     navigate('/signin');
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = async(e) => {
        
        e.preventDefault();
        await register(inputs);
        navigate('/login')
    }
    return(
        <AuthLayout>
        <div className="sign_up">
        <div className="content">
            <div className="log-on border_insc">
                <div className="logo">
                    <img src="./assets/images/logo.png" alt="Instagram logo"/>
                    <p>Sign up to see photos and videos from your friends.</p>
                    <button className="btn log_fac">
                        <a href="#">
                            <img src="./assets/images/facebook_white.png" alt="facebook icon"/>
                            Log in with Facebook
                        </a>
                    </button>
                    <div className="seperator">
                        <span className="ligne"></span>
                        <span className="ou">OR</span>
                        <span className="ligne"></span>
                    </div>

                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="email" id="emai" placeholder="email address"  onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="text" name="full_name" id="name" placeholder="Full Name" onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="text" name="user_name" id="username" placeholder="Username" onChange={handleChange}/>
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="password" onChange={handleChange}/>
                    </div>
                    <div className="info">
                        <p>
                            People who use our service may have uploaded your contact information to Instagram. 
                            <a href="#">Learn more</a>
                        </p>
                        <p>
                            By signing up, you agree to our 
                            <a href="#">Terms, Privacy Policy and Cookies Policy.</a> 
                        </p>
                    </div>
                    <button className="log_btn">Sign Up</button>
                </form>
                   
            </div>
            <div className="sing-in border_insc">
                <p>
                <Link to="/login">Have an account? Login</Link>
                </p>
            </div>
            <div className="download">
                <p>Get the app.</p>
                <div>
                    <img src="./assets/images/google_play_icon.png" alt="download app from google play"/>
                    <img src="./assets/images/microsoft-icon.png" alt="download app from microsoft"/>
                </div>
            </div>
        </div>
    </div>
    </AuthLayout>
    )
 }
 export default Sign_up;