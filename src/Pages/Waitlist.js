import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';
import Wait from '../Components/pictures/pac-man.png';

function Waitlist() {
    useEffect(() => {
        axios.get("http://localhost:3001/posts")
    }, [])
    return (
        <div className="App">
            <Sidebar />
            <Topbar />
            <div className="PageLayout">
                <div className="pacman">
                    <img src={Wait} height = {52} width = {110}/>
                    <div className="center">Enter a Student</div>
                </div>
            </div>
        </div>
    )
}

export default Waitlist
