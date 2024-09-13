import * as React from 'react';
// import {useState } from 'react';

function App() {
  return (
  <>
   <div className="sidebar">
        <div className="logo">
            <a href="./home.html">
                <img className="d-block d-lg-none small-logo" src="/assets/images/instagram.png" alt=""/>
                <img className="d-none d-lg-block" src="/assets/images/logo_menu.png" alt=""/>
            </a>
        </div>
        <div className="link">
              <img src="/assets/images/accueil.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
              <a href="#">Home</a>
        </div>
        <div className="link">
             <img src="/assets/images/search.png"  style={{height: '1rem', marginRight: '0.5rem'}} />
             <a href="#">Search</a>
        </div>
        <div className="link">
            <img src="/assets/images/compass.png"style={{height: '1rem', marginRight: '0.5rem'}}/>
            <a href="#">Explore</a>
        </div>
        <div className="link">
          <img src="/assets/images/video.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
          <a href="#">Reels</a>
        </div>
        <div className="link">
            <img src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem' }}/>
            <a href="#">Messages</a>
        </div>
        <div className="link">
            <img src="/assets/images/love.png" style={{width: '1rem' , marginRight: '0.5rem'}}/> 
            <a href="#">Notifications</a>
        </div>
        <div className="link">
            <img src="/assets/images/tab.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
           <a href="#">Create</a>
        </div>
        <div className="link">
            <img src="/assets/images/profile_img.jpg" style={{height: '1rem', marginRight: '0.5rem'}}/>
            <a href="#">Profile</a>
        </div>
        <div className="link">
            <img src=" /assets/images/menu.png"  style={{height: '1rem', marginRight:'0.5rem'}}/>
            <a href="#">More</a>
        </div>
      </div>
     
    <div className="bottom-navbar">
      <div className="bottom-link">
        <img  src=" /assets/ /assets/home.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
      </div>

      <div className="bottom-link">
        <img  src=" /assets/ /assets/explore.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
      </div>
      <div className="bottom-link">
        <img  src=" /assets/ /assets/reels.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
      </div>

      <div className="bottom-link">
        <img  src=" /assets/ /assets/create.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
      </div>
      <div className="bottom-link">
        <img src=" /assets/ /assets/tv.png" style={{height: '1rem', marginRight: '0.5rem'}} />
      </div>
    </div>

    <div className="main-container">
        <div className="stories-container">
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/3S1hjKR/account1.jpg"alt=" "/>
                </div>
                <p>zineb</p>
            </div>
            <div className="story">
                    <div className="gradient-border">
                    <img src="https://i.ibb.co/kD6tj9T/account2.jpg"alt=" " />
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/cx69NJL/account3-1.jpg"alt=" "/>
                </div>
               <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/Zhc5hHp/account4.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/SPTNbJL/account5.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/Zhc5hHp/account4.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/nj8pPqZ/account6.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/vkXPdxN/account7.jpg" alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/kD6tj9T/account2.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/7R0Vzp3/account8.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/gvrfhjL/account9.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/j8L7FPY/account10.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/JcXRPht/account11.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/6WvdZS9/account12.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/SPTNbJL/account5.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/gvrfhjL/account9.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/3S1hjKR/account1.jpg"alt=" "/>
                </div>
                <p>Username1</p>
            </div>
            <div className="story">
                <div className="gradient-border">
                    <img src="https://i.ibb.co/Zhc5hHp/account4.jpg"alt=" "/>
                </div>
                <p>Username2</p>
            </div>
    </div>

      <div className="post-container">
        <div className="post">
            <div className="post-header">
                <div className="post-info-flex">
                <img src="https://i.ibb.co/gvrfhjL/account9.jpg"alt="  Picture"className="profile-pic"/>
                <p>Zoe</p>
                <ul>
                    <li className="list-time mt-3">8 hrs</li>
                </ul>
                </div>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <img src="https://i.ibb.co/Jqh3rHv/img1.jpg"alt=" " className="post-img"/>
                <div className="post-icons">
                        <div className="post-icons-left">
                                <img className="loved"  src="/assets/images/heart.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                                <img  src="/assets/images/Fbble-chat.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                                <img src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
                        </div>
                            <img className="not_saved"  src=" /assets/images/save-instagram.png"  style= {{height: '1rem',marginRight: '0.5rem'}}/>
                        </div>
                        <p className="likes">100 likes</p>
                        <p className="caption"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non 
                            minus cumque, recusandae hic soluta harum aut nulla...</p>
                        <p><a className="gray" href="#">View all 2 comments</a></p>
                            <input type="/" placeholder="Add a comments..."/>
                </div>
           <div className="post">
                <div className="post-header">
                    <div className="post-info-flex">
                        <img src="https://i.ibb.co/gvrfhjL/account9.jpg"alt=" "className="profile-pic"/>
                        <p>Zoe</p>
                        <ul>
                        <li className="list-time mt-3">8 hrs</li>
                        </ul>
                    </div>
                <i className="fas fa-ellipsis-h"></i>
                </div>
                <img
                src="https://i.ibb.co/Jqh3rHv/img1.jpg"alt=" "className="post-img"/>
                <div className="post-icons">
                    <div className="post-icons-left">
                        <img className="loved"  src="/assets/images/heart.png"  style={{height: '1rem', marginRight: '5rem'}}/>
                        <img  src="/assets/images/bubble-chat.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                        <img  src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
                    </div>
                    <img className="not_saved" src="/images/save-instagram.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                </div>
                    <p className="likes">100 likes</p>
                    <p className="caption"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non 
                    minus cumque, recusandae hic soluta harum aut nulla...</p>
                    <p><a className="gray" href="#">View all 2 comments</a></p>
                <input type="/" placeholder="Add a comments..."/>
            </div>
          <div className="post">
            <div className="post-header">
              <div className="post-info-flex">
                <img
                  src="https://i.ibb.co/gvrfhjL/account9.jpg"
                  alt=" "
                  className="profile-pic"
                />
                <p>Zoe</p>
                <ul>
                  <li className="list-time mt-3">8 hrs</li>
                </ul>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <img
              src="https://i.ibb.co/Jqh3rHv/img1.jpg"alt=" "className="post-img"/>
            <div className="post-icons">
                <div className="post-icons-left">
                    <img className="loved"  src="/assets/images/heart.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                    <img  src="/assets/images/bubble-chat.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                    <img  src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
                </div>
              <img className="not_saved"  src=" /assets/images/save-instagram.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
            </div>
                <p className="likes">100 likes</p>
                <p className="caption"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non 
                minus cumque, recusandae hic soluta harum aut nulla...</p>
                <p><a className="gray" href="#">View all 2 comments</a></p>
              <input type="/" placeholder="Add a comments..."/>
          </div>
          <div className="post">
                <div className="post-header">
                <div className="post-info-flex">
                    <img
                    src="https://i.ibb.co/gvrfhjL/account9.jpg"
                    alt=" "
                    className="profile-pic"
                    />
                    <p>Zoe</p>
                    <ul>
                    <li className="list-time mt-3">8 hrs</li>
                    </ul>
                </div>
                <i className="fas fa-ellipsis-h"></i>
                </div>
                <img
                src="https://i.ibb.co/Jqh3rHv/img1.jpg"
                alt=" "
              className="post-img"
            />
            <div className="post-icons">
              <div className="post-icons-left">
                  <img className="loved"  src="/assets/images/heart.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                  <img  src="/assets/images/bubble-chat.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                  <img  src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
              </div>
              <img className="not_saved"  src="/assets/images/save-instagram.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
            </div>
            <p className="likes">100 likes</p>
            <p className="caption"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non 
              minus cumque, recusandae hic soluta harum aut nulla...</p>
            <p><a className="gray" href="#">View all 2 comments</a></p>
              <input type="/" placeholder="Add a comments..."/>
          </div>
            <div className="post">
                <div className="post-header">
                <div className="post-info-flex">
                    <img
                    src="https://i.ibb.co/gvrfhjL/account9.jpg"alt=" "className="profile-pic"/>
                    <p>Zoe</p>
                    <ul>
                    <li className="list-time mt-3">8 hrs</li>
                    </ul>
                </div>
                <i className="fas fa-ellipsis-h"></i>
                </div>
                <img
                src="https://i.ibb.co/Jqh3rHv/img1.jpg"
                alt=" "
                className="post-img"
                />
            <div className="post-icons">
              <div className="post-icons-left">
                    <img className="loved"  src="/assets/images/heart.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                    <img  src="/assets/images/bubble-chat.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                    <img  src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
              </div>
              <img className="not_saved"  src="/assets/images/save-instagram.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
            </div>
                <p className="likes">100 likes</p>
                <p className="caption"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non 
                minus cumque, recusandae hic soluta harum aut nulla...</p>
                <p><a className="gray" href="#">View all 2 comments</a></p>
                <input type="/" placeholder="Add a comments..."/>
          </div>
          <div className="post">
            <div className="post-header">
              <div className="post-info-flex">
                <img
                  src="https://i.ibb.co/gvrfhjL/account9.jpg"
                  alt=" "
                  className="profile-pic"
                />
                <p>Zoe</p>
                <ul>
                  <li className="list-time mt-3">8 hrs</li>
                </ul>
              </div>
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <img src="https://i.ibb.co/Jqh3rHv/img1.jpg"alt="Post Image" className="post-img"/>
            <div className="post-icons">
                <div className="post-icons-left">
                    <img className="loved"  src="/assets/images/heart.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                    <img  src="/assets/images/bubble-chat.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
                    <img  src="/assets/images/send.png" style={{height: '1rem', marginRight: '0.5rem'}}/>
                </div>
              <img className="not_saved"  src=" /assets/images/save-instagram.png"  style={{height: '1rem', marginRight: '0.5rem'}}/>
            </div>
                <p className="likes">100 likes</p>
                <p className="caption"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima accusantium aperiam quod non 
                minus cumque, recusandae hic soluta harum aut nulla...</p>
                <p><a className="gray" href="#">View all 2 comments</a></p>
                <input type="/" placeholder="Add a comments..."/>
          </div>
      </div>
    </div>
    <div className="suggested-for-you">
      <div className="profile-container">
        <div className="profile">
          <img
            src="https://i.ibb.co/vkXPdxN/account7.jpg"
            alt=" "
          />
          <div className="profile-info">
            <strong>Username</strong>
            <span className="profile-info-name">Name</span>
          </div>
        </div>
        <div className="switch">Switch</div>
      </div>
      <div className="profile-div d-flex row" >
        <p style={{fontSize: '0.8re',color: 'grey'}}>
          Suggested For You
        </p>
        <p><a href="#">see All</a></p>
        <div className="profile">
          <img
            src="https://i.ibb.co/kD6tj9T/account2.jpg"
            alt=" "
          />
          <div className="profile-info">
            <strong>Username</strong>
            <span className="profile-info-name">Name</span>
          </div>
        </div>
       
        <div className="profile">
          <img src="https://i.ibb.co/SPTNbJL/account5.jpg" alt=" "/>
          <div className="profile-info">
            <strong>Username</strong>
            <span className="profile-info-name">Name</span>
          </div>
        </div>
         
      </div>
    </div>
  </>   
  );
}

export default App;
