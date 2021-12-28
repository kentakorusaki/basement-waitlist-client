import React from 'react'
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

function Serving() {
    return (
        <div className="App">
            <Sidebar />
            <Topbar />
            <div className="PageLayout">
                serving...
            </div>
        </div>
    )
}

export default Serving
