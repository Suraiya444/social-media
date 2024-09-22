import React from "react";
import { useLocation, Link} from 'react-router-dom';

function Sidebar (){
    const activeMenu = (e)=>{
        document.querySelectorAll('.submenu').forEach(
            function(e){
                e.classList.remove('active');
            }
        )
        const childElement=e.target.parentElement.querySelector('.submenu');
        if(childElement && childElement.classList.contains('submenu')){
            childElement.classList.add('active');
        }
    }

    const location=useLocation();
    const isLinkActive=(path)=>{
        return location.pathname==path ? 'active':"";
    }
    return(
        <div className="nav_menu">
        <div className="fix_top">
            
                <div className="nav">
                    <div className="logo">
                        <a href="./home.html">
                            <img className="d-block d-lg-none small-logo" src="./assets/images/instagram.png" alt="logo"/>
                            <img className="d-none d-lg-block" src="./assets/images/logo_menu.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li onclick={activeMenu}  className={`active ${isLinkActive("/home")}`} >
                            <Link to={"/"} className={`sidebar-link`} ><img src="./assets/images/accueil.png"/>  <span className="d-none d-lg-block ">Home</span></Link>    
                            </li>
                            <li id="search_icon">
                                <a href="#">
                                    <img src="./assets/images/search.png"/>
                                    <span className="d-none d-lg-block search">Search </span>
                                </a>
                            </li>
                            <li onclick={activeMenu}  className={`active ${isLinkActive("/explore")}`}>
                            <Link to={"/explore"} className={`sidebar-link`} >
                                    <img src="./assets/images/compass.png"/>
                                    <span className="d-none d-lg-block ">Explore</span>
                                    </Link> 
                            </li>
                            <li onclick={activeMenu}  className={`active ${isLinkActive("/reels")}`} >
                            <Link to={"/reels"} className={`sidebar-link`} ><img src="./assets/images/video.png"/>  <span className="d-none d-lg-block ">Reels</span></Link>
                            </li>
                            <li onclick={activeMenu}  className={`active ${isLinkActive("/message")}`} >
                            <Link to={"/message"} className={`sidebar-link`}><img src="./assets/images/send.png"/><span className="d-none d-lg-block ">Messages</span></Link>
                              
                            </li>
                            <li className="notification_icon">
                                <a href="#">
                                    <img src="./assets/images/love.png"/>
                                    <span className="d-none d-lg-block ">Notifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" data-bs-toggle="modal" data-bs-target="#create_modal">
                                    <img src="./assets/images/tab.png"/>
                                    <span className="d-none d-lg-block ">Create</span>
                                </a>
    
                            </li>
                            <li onclick={activeMenu}  className={`active ${isLinkActive("/profile")}`} >
                            <Link to={"/profile"} className={`sidebar-link`} >  <img className="circle story" src="./assets/images/profile_img.jpg"/><span className="d-none d-lg-block ">Profile</span> </Link>   
                                <a href="./profile.html">
                                  
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="more">
                        <div className="btn-group dropup">
                            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="./assets/images/menu.png"/>
                                <span className="d-none d-lg-block ">More</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">
                                        <span>Settings</span>
                                        <img src="./assets/images/reglage.png"/>
                                    </a></li>
                                    <li><a className="dropdown-item" href="#">
                                        <span>Settings</span>
                                        <img src="./assets/images/history.png"/>
                                    </a></li>
                                <li><a className="dropdown-item" href="#">
                                        <span>Saved</span>
                                        <img src="./assets/images/save-instagram.png"/>
                                    </a></li>
                                <li><a className="dropdown-item" href="#">
                                        <span>Switch apperance</span>
                                        <img src="./assets/images/moon.png"/>
                                    </a></li>
                                <li><a className="dropdown-item" href="#">
                                        <span>Report a problem</span>
                                        <img src="./assets/images/problem.png"/>
                                    </a></li>
                                <li><a className="dropdown-item bold_border" href="#">
                                        <span>Switch accounts</span>
                                    </a></li>
                                <li><a className="dropdown-item" href="./login.html">
                                        <span>Log out</span>
                                    </a></li>
                            </ul>
                        </div>
                         
    
                    </div>
                </div>
        </div>
    
        <div id="search" className="search_section">
            <h2>Search</h2>
            <form method="post">
                <input type="text" placeholder="Search"/>
            </form>
                <div className="find">
                    <div className="desc">
                        <h4>Recent</h4>
                        <p><a href="#">Clear all</a></p>
                </div>
                    <div className="account">
                        <div className="cart">
                            <div>
                                <div className="img">
                                    <img src="./assets/images/profile_img.jpg" alt=""/>
                                </div>
                                <div className="info">
                                    <p className="name">Zineb_essoussi</p>
                                    <p className="second_name">Zim Ess</p>
                                </div>
                            </div>
                            <div className="clear">
                                <a href="#">X</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    
        <div id="notification" className="notification_section">
            <h2>Notifications</h2>
                <div className="notifications">
                        <div className="notif follow_notif">
                                <div className="cart">
                                        <div>
                                            <div className="img">
                                                <img src="./assets/images/profile_img.jpg" alt=""/>
                                            </div>
                                                <div className="info">
                                                    <p className="name">
                                                        Zineb_essoussi
                                                        <span className="desc">started following you.</span>
                                                        <span className="time">2h</span>
                                                    </p>
    
                                                </div>
                                        </div>
                                        <div className="follow_you">
                                            <button className="follow_text">Follow</button>
                                        </div>
                                </div>
                        </div>
                        <div className="notif follow_notif">
                                <div className="cart">
                                        <div>
                                            <div className="img">
                                                <img src="./assets/images/profile_img.jpg" alt=""/>
                                            </div>
                                            <div className="info">
                                                <p className="name">
                                                    Zineb_essoussi
                                                    <span className="desc">started following you.</span>
                                                    <span className="time">2h</span>
                                                </p>
    
                                            </div>
                                        </div>
                                        <div className="follow_you">
                                            <button className="follow_text">Follow</button>
                                        </div>
                                </div>
                        </div>
                        <div className="notif story_notif">
                            <div className="cart">
                                <div>
                                        <div className="img">
                                            <img src="./assets/images/profile_img.jpg" alt=""/>
                                        </div>
                                        <div className="info">
                                            <div className="info">
                                                <p className="name">
                                                    Zineb_essoussi
                                                    <span className="desc">liked your story.</span>
                                                    <span className="time">2d</span>
                                                </p>
    
                                            </div>
                                        </div>
                                </div>
                                <div className="story_like">
                                    <img src="./assets/imagesimg2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="notif follow_notif">
                            <div className="cart">
                                <div>
                                    <div className="img">
                                        <img src="./assets/images/profile_img.jpg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <p className="name">
                                            Zineb_essoussi
                                            <span className="desc">started following you.</span>
                                            <span className="time">2h</span>
                                        </p>
    
                                    </div>
                                </div>
                                <div className="follow_you">
                                    <button className="follow_text">Follow</button>
                                </div>
                            </div>
                        </div>
                        <div className="notif story_notif">
                            <div className="cart">
                                <div>
                                    <div className="img">
                                        <img src="./assets/images/profile_img.jpg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <div className="info">
                                            <p className="name">
                                                Zineb_essoussi
                                                <span className="desc">liked your story.</span>
                                                <span className="time">2d</span>
                                            </p>
    
                                        </div>
                                    </div>
                                </div>
                                <div className="story_like">
                                    <img src="./assets/imagesimg2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="notif follow_notif">
                            <div className="cart">
                                <div>
                                    <div className="img">
                                        <img src="./assets/imagesprofile_img.jpg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <p className="name">
                                            Zineb_essoussi
                                            <span className="desc">started following you.</span>
                                            <span className="time">2h</span>
                                        </p>
    
                                    </div>
                                </div>
                                <div className="follow_you">
                                    <button className="follow_text">Follow</button>
                                </div>
                            </div>
                        </div>
                </div>
         </div> 
         
    </div> 
    
     )
}
export default Sidebar;