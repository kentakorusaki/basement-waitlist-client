import React from 'react'
import Sidebar from '../Components/Sidebar';
import { useParams } from 'react-router-dom';
import Topbar from '../Components/Topbar';

function Profile() {
    let {userID} = useParams();
    return (
        <div className="App">
            <Sidebar />
            <Topbar />
            <div className="PageLayout">
                Profile {userID}
            </div>
        </div>
    )
}

export default Profile