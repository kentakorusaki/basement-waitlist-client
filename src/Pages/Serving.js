import { React, useState , useEffect } from 'react'
import axios from "axios";
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';

function Serving() {

    const [listOfPosts, setListOfPosts] = useState([]);

    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3001/posts", {
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
            }
        }).then((response) => {
            setListOfPosts(response.data);
        })
    }, [count]);

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

export default Serving
