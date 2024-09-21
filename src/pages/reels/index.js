import React from 'react'
import LayOut from '../../layouts/layout'

function Reel(){
    return(
        <LayOut>
            <div className="reels">  
               <div className="reel">
               <div className="video">
            <video src="./assets/video/video1.mp4" autoplay loop/>
            <div className="content">
                <div className="sound">
                    <img className="volume-up" src="./assets/images/volume-up.png" />
                    <img className="volume-mute" src="./assets/images/volume-mute.png" />
                </div>
                <div className="play">
                    <img src="./assets/images/play-button-arrowhead.png" />
                </div>
                <div className="info">
                    <div className="profile">
                        <h4><a href="#">
                                <img src='https://i.ibb.co/3S1hjKR/account1.jpg' />
                            zineb
                            </a></h4>
                        <span>.</span>
                        <button className="follow_text">Follow</button>
                    </div>
                    <div className="desc">
                        <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis... <span className="show_text">more</span>
                        </p>
                        <div className="more">
                            <div className="music">
                                <img src="./assets/images/music.png" />
                                <span>nameOfMusic</span>
                            </div>
                            <div className="position">
                                <img src="./assets/images/map.png" />
                                <span>casablanca</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="likes">
            <div className="like">
                <img className="not_loved" src="./assets/images/love.png" />
                {/* <img className="loved" src="./assets/images/heart.png" /> */}
                <p>55.9K</p>
            </div>
            <div className="messsage">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#message_modal">
                    <img src="./assets/images/bubble-chat.png" />
                    <p className="m-0">555</p>
                </button>
            </div>
            <div className="send">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#send_message_modal">
                    <img src="./assets/images/send.png" />
                </button>
            </div>
                <div className="save not_saved">
                    <img   src="./assets/images/save_black.png" className="hide saved" />
                    <img className="not_saved" src="./assets/images/save-instagram.png" />
                </div>
                <div className="more">
                        <img src="./assets/images/show_more.png" />
                    </div>
                <div className="profile">
                    <img src="https://i.ibb.co/3S1hjKR/account1.jpg" />
                </div>
       </div>

               </div>

               <div className="reel">
               <div className="video">
            <video src="./assets/video/video2.mp4" autoplay loop/>
            <div className="content">
                <div className="sound">
                    <img className="volume-up" src="./assets/images/volume-up.png" />
                    <img className="volume-mute" src="./assets/images/volume-mute.png" />
                </div>
                <div className="play">
                    <img src="./assets/images/play-button-arrowhead.png" />
                </div>
                <div className="info">
                    <div className="profile">
                        <h4><a href="#">
                                <img src='https://i.ibb.co/8x4Hqdw/account2.jpg' />
                            zineb
                            </a></h4>
                        <span>.</span>
                        <button className="follow_text">Follow</button>
                    </div>
                    <div className="desc">
                        <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis... <span className="show_text">more</span>
                        </p>
                        <div className="more">
                            <div className="music">
                                <img src="./assets/images/music.png" />
                                <span>nameOfMusic</span>
                            </div>
                            <div className="position">
                                <img src="./assets/images/map.png" />
                                <span>casablanca</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="likes">
            <div className="like">
                <img className="not_loved" src="./assets/images/love.png" />
                {/* <img className="loved" src="./assets/images/heart.png" /> */}
                <p>55.9K</p>
            </div>
            <div className="messsage">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#message_modal">
                    <img src="./assets/images/bubble-chat.png" />
                    <p className="m-0">555</p>
                </button>
            </div>
            <div className="send">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#send_message_modal">
                    <img src="./assets/images/send.png" />
                </button>
            </div>
                <div className="save not_saved">
                    <img   src="./assets/images/save_black.png" className="hide saved" />
                    <img className="not_saved" src="./assets/images/save-instagram.png" />
                </div>
                <div className="more">
                        <img src="./assets/images/show_more.png" />
                    </div>
                <div className="profile">
                    <img src='https://i.ibb.co/8x4Hqdw/account2.jpg' />
                </div>
       </div>

               </div>
               <div className="reel">
               <div className="video">
            <video src="./assets/video/video4.mp4" autoplay loop/>
            <div className="content">
                <div className="sound">
                    <img className="volume-up" src="./assets/images/volume-up.png" />
                    <img className="volume-mute" src="./assets/images/volume-mute.png" />
                </div>
                <div className="play">
                    <img src="./assets/images/play-button-arrowhead.png" />
                </div>
                <div className="info">
                    <div className="profile">
                        <h4><a href="#">
                                <img src='https://i.ibb.co/CWbynB2/account3-1.jpg' />
                            zineb
                            </a></h4>
                        <span>.</span>
                        <button className="follow_text">Follow</button>
                    </div>
                    <div className="desc">
                        <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Officiis... <span className="show_text">more</span>
                        </p>
                        <div className="more">
                            <div className="music">
                                <img src="./assets/images/music.png" />
                                <span>nameOfMusic</span>
                            </div>
                            <div className="position">
                                <img src="./assets/images/map.png" />
                                <span>casablanca</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="likes">
            <div className="like">
                <img className="not_loved" src="./assets/images/love.png" />
                {/* <img className="loved" src="./assets/images/heart.png" /> */}
                <p>55.9K</p>
            </div>
            <div className="messsage">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#message_modal">
                    <img src="./assets/images/bubble-chat.png" />
                    <p className="m-0">555</p>
                </button>
            </div>
            <div className="send">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#send_message_modal">
                    <img src="./assets/images/send.png" />
                </button>
            </div>
                <div className="save not_saved">
                    <img   src="./assets/images/save_black.png" className="hide saved" />
                    <img className="not_saved" src="./assets/images/save-instagram.png" />
                </div>
                <div className="more">
                        <img src="./assets/images/show_more.png" />
                    </div>
                <div className="profile">
                    <img src='https://i.ibb.co/CWbynB2/account3-1.jpg' />
                </div>
       </div>

               </div>
                
            </div>

            <div className="modal fade" id="message_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Comments</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="comments">
                                <div className="comment">
                                    <div className="d-flex">
                                        <div className="img">
                                            <img src="./assets/images/profile_img.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="person">
                                                <h4>namePerson</h4>
                                                <span>3j</span>
                                            </div>
                                            <p>Wow amzing shot</p>
                                            <div className="replay">
                                                <button className="replay">replay</button>
                                                <button className="translation">see translation</button>
                                            </div>
                                            <div className="answers">
                                                <button className="see_comment">
                                                    <span className="hide_com">Hide all responses</span>
                                                    <span className="show_c"> <span className="line"></span> See the <span> 1
                                                        </span> answers</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="like">
                                        <img className="not_loved" src="./assets/images/love.png" alt=""/>
                                        <img className="loved" src="./assets/images/heart.png" alt=""/>
                                        <p> 55</p>
                                    </div>
                                </div>
                                <div className="responses">
                                    <div className="response comment">
                                        <div className="d-flex">
                                            <div className="img">
                                                <img src="./assets/images/profile_img.jpg" alt=""/>
                                            </div>
                                            <div className="content">
                                                <div className="person">
                                                    <h4>namePerson</h4>
                                                    <span>3j</span>
                                                </div>
                                                <p>Wow amzing shot</p>
                                                <div className="replay">
                                                    <button>replay</button>
                                                    <button>see translation</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="like">
                                            <img className="not_loved" src="./assets/images/love.png" alt=""/>
                                            <img className="loved" src="./assets/images/heart.png" alt=""/>
                                            <p> 55</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <form method="post">
                                <div className="input">
                                    <img src="./assets/images/profile_img.jpg" alt=""/>
                                    <input type="text" id="emoji_comment" placeholder="Add a comment..." />
                                </div>
                                <div className="emogi">
                                    <img src="./assets/images/emogi.png" alt=""/>
                                </div> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="modal fade" id="send_message_modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Share</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="send">
                                <div className="search_person">
                                    <p>To:</p>
                                    <input type="text" placeholder="Search"/>
                                </div>
                                <p>Suggested</p>
                                <div className="poeple">
                                    <div className="person">
                                        <div className="d-flex">
                                            <div className="img">
                                                <img src="./assets/images/profile_img.jpg" alt=""/>
                                            </div>
                                            <div className="content">
                                                <div className="person">
                                                    <h4>namePerson</h4>
                                                    <span>zim ess</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="circle">
                                            <span></span>
                                    </div>
                                </div>
                                <div className="person">
                                    <div className="d-flex">
                                        <div className="img">
                                            <img src="./assets/images/profile_img.jpg" alt=""/>
                                        </div>
                                        <div className="content">
                                            <div className="person">
                                                <h4>namePerson</h4>
                                                <span>zim ess</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="circle">
                                        <span></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary">Send</button>
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
            </div>


</LayOut>
    )
}
export default Reel;