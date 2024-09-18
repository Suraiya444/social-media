import React from 'react'
import LayOut from '../../layouts/layout'
function Profile (){
    return(
        <LayOut>
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
                            <img src="./assets/images/img2.jpg" alt=""/>
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
                            <img src="./assets/images/img2.jpg" alt=""/>
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
            </div>
        </div>
       

        <div className="profile_container">
            <div className="profile_info">
                <div className="cart">
                        <div className="img">
                            <img src="./assets/images/profile_img.jpg" alt=""/>
                        </div>
                        <div className="info">
                            <p className="name">
                                Zineb_essoussi
                                <button className="edit_profile">
                                    Edit profile 
                                </button>
                            </p>
                            <div className="general_info">
                                <p><span>1</span> post</p>
                                <p><span>177</span> followers</p>
                                <p><span>137</span> following</p>
                            </div>
                            <p className="nick_name">Zin Ess</p>
                            <p className="desc">
                                I'am an engineering student <br/>
                                ENSAO
                            </p>
                        </div>
                </div>
            </div>
            <div className="highlights">
                <div className="highlight">
                    <div className="img">
                        <img src="./assets/images/profile_img.jpg" alt=""/>
                    </div>
                    <p>conseils</p>
                </div>
                <div className="highlight highlight_add">
                    <div className="img">
                        <img src="./assets/images/plus.png" alt=""/>
                    </div>
                    <p>New</p>
                </div>
            </div>
            <hr>
            <div className="posts_profile">
                <ul className="nav-pills w-100 d-flex justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item mx-2" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            <img src="./assets/images/feed.png" alt="posts"/>
                            POSTS
                        </button>
                    </li>
                    <li className="nav-item mx-2" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        <img src="./assets/images/save-instagram.png" alt="saved posts"/>
                        SAVED
                      </button>
                    </li>
                    <li className="nav-item mx-2" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <img src="./assets/images/tagged.png" alt="tagged posts"/>
                        TAGGED
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <div id="posts_sec" className="post">
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/Jqh3rHv/img1.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/2ZxBFVp/img2.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/5vQt677/img3.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/pJ8thst/account13.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/j8L7FPY/account10.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                        <div id="saved_sec" className="post">
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/6WvdZS9/account12.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/pJ8thst/account13.jpg" alt=""/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                        <div id="tagged" className="post">
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/Zhc5hHp/account4.jpg" alt=""/>
                            </div>
                            <div className="item">
                                <img className="img-fluid item_img" src="https://i.ibb.co/SPTNbJL/account5.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    
                  </div>
            </div>
        </div>


        
        <div className="modal fade" id="create_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title w-100 fs-5 d-flex align-items-end justify-content-between"
                            id="exampleModalLabel">
                            <span className="title_create">Create new post</span>
                            <button className="next_btn_post btn_link"></button>
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="up_load" src="./assets/images/upload.png" alt="upload"/>
                        <p>Drag photos and videos here</p>
                        <button className="btn btn-primary btn_upload">
                            select from your computer
                            <form id="upload-form">
                                <input className="input_select" type="file" id="image-upload" name="image-upload"/>
                            </form>
                        </button>
                        <div id="image-container" className="hide_img">
                        </div>
                        <div id="image_description" className="hide_img">
                            <div className="img_p"></div>
                            <div className="description">
                                <div className="cart">
                                    <div>
                                        <div className="img">
                                            <img src="./assets/images/profile_img.jpg"/>
                                        </div>
                                        <div className="info">
                                            <p className="name">Zineb_essoussi</p>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <textarea type="text" id="emoji_create" placeholder="write your email"></textarea>
                                </form>
                            </div>
                        </div>
                        <div className="post_published hide_img">
                            <img src="./assets/images/uploaded_post.gif" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </LayOut>
    )
}
export default Profile;