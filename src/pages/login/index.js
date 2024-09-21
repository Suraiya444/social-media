import LayOut from '../../layouts/layout';
import { Link,useNavigate } from 'react-router-dom';
import { login } from '../../Api/AllApi';
import React,{useState} from 'react';

function Login(){
    const navigate = useNavigate();
    const [inputs, setInputs ] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values =>({...values, [name]: value}))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let check = await login(inputs);
        if(check){
            window.location="http://localhost:3000/"
        }else{
            alert("Sorry password or email address is wrong!");
        }
    }
    return(
        <LayOut>
             <div className="container">
                <div className="login"> 
                    <div className="content">
                        <div className="log-on border_insc">
                            <div className="logo">
                                <img src="./assets/images/logo.png" alt="Instagram logo"/>
                            </div>
                            <form  onSubmit={handleSubmit}>
                                <div>
                                    <input type="email" name="email" id="emai" placeholder="e-mail"  onChange={handleChange}/>
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="password" onChange={handleChange}/>
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
                            <Link to="/register">Don't have an account?</Link>
                            </p>
                        </div>
                        
                    </div>
                </div>
    </div>
        </LayOut>
    )
    
}
export default Login;