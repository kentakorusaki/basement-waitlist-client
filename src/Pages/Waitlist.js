import React from 'react'
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

function Waitlist() {
    return (
        <div className="App">
            <Sidebar />
            <Topbar />
            <div className="PageLayout">
                waiting...
            </div>
        </div>
    )
}

export default Waitlist
