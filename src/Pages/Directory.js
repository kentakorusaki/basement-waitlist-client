import React from 'react'
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

function Directory() {
    return (
        <div className="App">
            <Sidebar />
            <Topbar />
            <div className="PageLayout">
                <div className="postBar">
                    <ul className="post">
                        <li className="id"></li>
                        <li className="name">NAME</li>
                        <li className="type">TYPE</li>
                        <li className="desc">DESCRIPTION</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Directory