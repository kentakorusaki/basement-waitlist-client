import React from 'react'
import "../App.css";
import TopbarData from './TopbarData';

function Topbar() {
    return (
        <div className="Topbar">
            <ul className="Search">
                <TopbarData />
            </ul>
        </div>
    )
}

export default Topbar
