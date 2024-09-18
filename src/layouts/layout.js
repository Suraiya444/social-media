import React from "react";
import Sidebar from './include/sidebar';
import './assets/boot/bootstrap.css';
import './assets/boot/bootstrap.min.css';
import './assets/css/main.css';

function LayOut({children}){
    return(
        <div id="post_page">
            <Sidebar/>
            <div id="second_container">
            <main>{children}</main>
            </div>

        </div>
    )
}
export default LayOut;