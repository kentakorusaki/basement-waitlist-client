import React, { useState } from 'react'
import axios from "axios";
import Logo from '../Components/pictures/basementlogo.png';
import {RegisterData} from '../Components/RegisterData';
import { useNavigate } from "react-router-dom";

function Homepage() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const login = () => {
        const data = { email: email, password: password };
        axios.post("https://basement-waitlist.herokuapp.com/users/login", data).then((response) => {
            if(response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data);
                navigate("/waitlist");
            }
        })
    };
    return (
        <div className="loginPage">
            <img className = "logo" src={Logo} alt="Logo" height = {92} width = {90}/>
            <div className="formContainer">
                <label>Email:</label>
                <input
                    type="email"
                    id="inputCreateLogin"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
                <label>Password:</label>
                <input
                    type="password"
                    id="inputCreateLogin"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        if(event.key == 'Enter') {
                            login();
                        }
                    }}
                />
                <button onClick={()=> { login(); }}>
                    Login
                </button>
            </div>
            <div className="register">
                Don't have an account?
                {RegisterData.map((val, key) => {
                    return (
                        <ins 
                            key={key}
                            className="link"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={()=> {
                                window.location.pathname = val.link
                            }}
                        > Register Here</ins>
                    );
                })}
            </div>
        </div>
    );
}

export default Homepage
