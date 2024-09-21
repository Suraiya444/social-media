import React from 'react'
import LayOut from '../../layouts/layout'

function Msg(){
    return (
    <LayOut>
         <div id="message">
        <div className="message_container">
            <div className="persons">
                <div className="account_name">
                    <p>Zineb_essoussi</p>
                    <p className="search">
                        <img src="./assets/images/edit.png" alt="edit"/>
                    </p>
                </div>
                <div className="account_message">
                    <div className="desc">
                        <p>Messages</p>
                        <p><a href="#">3 requests</a></p>
                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src='https://i.ibb.co/19R19st/account4.jpg' alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">amal</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src='https://i.ibb.co/x68ZFKP/account6.jpg' alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">amine</p>
                            </div>
                        </div>

                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src='https://i.ibb.co/CWbynB2/account3-1.jpg' alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">amina</p>
                            </div>
                        </div>

                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src='https://i.ibb.co/8x4Hqdw/account2.jpg' alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">ikram</p>
                            </div>
                        </div>

                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src='https://i.ibb.co/3S1hjKR/account1.jpg' alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">Zim </p>
                            </div>
                        </div>
                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src="https://i.ibb.co/4M3W996/account14.jpg" alt=""/>
                            </div>
                            <div className="info">
                                <p className="name"> zoe</p>
                            </div>
                        </div>

                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src="./assets/images/profile_img.jpg" alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">Zineb_essoussi</p>
                            </div>
                        </div>

                    </div>
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src="./assets/images/profile_img.jpg" alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">Zineb_essoussi</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="message">
                <div className="options">
                    <div className="cart">
                        <div>
                            <div className="img">
                                <img src="./assets/images/profile_img.jpg" alt=""/>
                            </div>
                            <div className="info">
                                <p className="name">Zineb_essoussi</p>
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        <a href="#">
                            <img src="./assets/images/telephone.png" alt="call"/>
                        </a>
                        <a href="#">
                            <img src="./assets/images/video_call.png" alt="video call"/>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <div className="my_message">
                        <p className="p_message">hello how are you?</p>
                    </div>
                    <div className="response_message">
                        <p className="p_message">hi! i'm fine and you?</p>
                    </div>
                    <div className="my_message">
                        <p className="p_message">I'm good </p>
                    </div>
                    <div className="response_message">
                        <p className="p_message">I'll come tomorrow</p>
                    </div>

                </div>
                <form>
                    <input type="text" id="emoji" placeholder="write your email" />
                </form>

            </div>
        </div>
    
 
    <div className="modal fade" id="create_modal" tabIdex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
export default Msg;