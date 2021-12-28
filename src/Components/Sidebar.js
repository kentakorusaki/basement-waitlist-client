import React from 'react';
import "../App.css";
import {SidebarData} from './SidebarData';
import {SidebarWelcome} from './SidebarWelcome';
import {SidebarProfile} from './SidebarProfile';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className = "Welcome">
                {SidebarWelcome.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="head"
                            id=""
                            onClick={()=> {
                                window.location.pathname = "/"
                            }}
                        >
                            <div class="container" id="logo">{val.logo}</div>  <div id="name">{val.name}</div>
                        </li>
                    );
                })}
            </ul>
            <ul className = "SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={()=> {
                                window.location.pathname = val.link
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
            <ul className = "Profile">
                {SidebarProfile.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="foot"
                            id=""
                            onClick={()=> {
                                window.location.pathname = val.link
                            }}
                        >
                            <div id="pic">{val.pic}</div>  <div id="name">{val.name}</div>
                        </li>
                    );
                })}
            </ul>    
        </div>
    );
}

export default Sidebar
