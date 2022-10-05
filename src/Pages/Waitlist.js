import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import {useFormik, Formik, Form, yupToFormErrors} from 'formik';
import * as Yup from 'yup';
import emailjs from "emailjs-com";
//import Timer from '../Components/Timer';
import Sidebar from '../Components/Sidebar';
import Topbar from '../Components/Topbar';
import Popup from "../Components/waitlistpop";
import Wait from '../Components/pictures/pac-man.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
//<li className="time"><Timer hoursMinSecs={hoursMinSecs = {hours: parseInt(value.hour), minutes: parseInt(value.minute), seconds: 0}}/></li>
//<li>{value.createdAt}</li>
function Waitlist() {
    const [buttonPopup, setButtonPopup] = useState(false);

    const [listOfPosts, setListOfPosts] = useState([]);

    const [count, setCount] = useState(0);

    //var hoursMinSecs = {hours: 0, minutes: 0, seconds: 0};

    function refreshPage() {
        window.location.reload(false);
    }

    function getTime() {
        const date = new Date();
        var hours = date.getHours(), min = date.getMinutes();
        if(hours >= 13){
            hours -= 12;
        }
        const time = hours + ':' + min;
        return (time); 
    }

    function sendEmail(user, sendTo) {
        var templateParams;
        templateParams = {
            name: user,
            email: sendTo,
            subject: "Woot! Time to start gaming at The Basement",
        };
        emailjs.send('The Basement', 'template_r2k3s3l', templateParams, 'Ej4VQueQAVzMHfzWv')
            .then((result) => {
                console.log(result.text);
                alert("Email has been sent!");
            }, (error) => {
                console.log(error.text);
            });

    }

    useEffect(() => {
        axios.get("https://basement-waitlist.herokuapp.com/posts", {
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
            }
        }).then((response) => {
            setListOfPosts(response.data);
        })
    }, [count]);

    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            type:'',
            hour:'',
            minute:'',
            description:'',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email adress').required('Required'),
            type: Yup.string().required('Required'),
            hour: Yup.string(),
            minute: Yup.string(),
            description: Yup.string(),
        }),

        onSubmit: (data) => {
            axios.post("https://basement-waitlist.herokuapp.com/posts", data).then((response) => {
            
        })},

    })
    function confirmStudent() {
        alert("This button does nothing");
    }
    const deleteStudent = (id) => {
        let text = "Are you sure you want to delete this Student?";
        if (window.confirm(text)) {
            axios.delete(`https://basement-waitlist.herokuapp.com/posts/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            })
            refreshPage();
        }
    }

    return (
        <div className="App">
            <Sidebar />
            <Topbar />
            <div className="PageLayout">
                <div className="postBar">
                    <ul className="post">
                        <li className="id">TIME</li>
                        <li className="name">NAME</li>
                        <li className="type">TYPE</li>
                        <li className="desc">EMAIL</li>
                        <li className="time">DESCRIPTION</li>
                    </ul>
                </div>
                <div className="postStudent">
                    {listOfPosts.map((value) => {
                        return (
                            <ul className="post">
                                <li className="id"></li>
                                <li className="name">{value.name}</li>
                                <li className="type">{value.type}</li>
                                <li className="desc">{value.email}</li>
                                <li className="time">{value.description}</li>
                                <li><button className="clock" title="Set Current Time" onClick={() => confirmStudent()}><AccessTimeIcon/></button></li>
                                <li><button className="email" title="Email" onClick={() => sendEmail(value.name, value.email)}><MailOutlineIcon /></button></li>
                                <li><button className="check" title="Confirm" onClick={() => confirmStudent()}><CheckIcon /></button></li>
                                <li><button className="close" title="Close" onClick={() => {deleteStudent(value.id)}}><CloseIcon /></button></li>
                            </ul>
                        );
                    })}
                </div>
                <div className="pacman" onClick={() => setButtonPopup(true)}>
                    <img src={Wait} alt="pac-man" height = {52} width = {110}/>
                    <div className="center">Enter a Student</div>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h2>Add Student to Waitlist</h2>
                <hr></hr>
                <br></br>
                <div>
                    <Formik onSubmit={formik.handleSubmit}>
                        <Form className="waitlist">
                            <label>Student Name: </label>
                            <input
                            autoComplete='off'
                            id="inputCreateLogin"
                            name="name"
                            type="text"
                            placeholder=""
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                            ) : null}
                            <label>Email: </label>
                            <input 
                                autoComplete="off"
                                id="inputCreateLogin"
                                name="email"
                                type="email"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div style={{ color: "red" }}>{formik.errors.email}</div>
                            ) : null}
                            <label>type: </label>
                            <select 
                                id="inputCreateLogin"
                                name="type"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.service}
                                style={{ display: 'block' }}
                            >
                                <option value="" label="Select a type"/>
                                <option value="PC" label="PC"/>
                                <option value="Xbox" label="Xbox"/>
                                <option value="PS" label="Playstation"/>
                                <option value="Switch" label="Switch"/>
                                <option value="TABLE" label="Table Top"/>
                            </select>
                            {formik.touched.type && formik.errors.type ? (
                                <div style={{ color: "red" }}>{formik.errors.type}</div>
                            ) : null}
                            <label>(Not Required) Set Time: </label>
                            <div className="timer">
                                <select
                                    id="inputCreateLogin"
                                    name="hour"
                                    placeholder=""
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.hour}
                                    style={{ display: 'block' }}
                                >
                                    <option value="" label="Select hour(s)"/>
                                    <option value="0" label="0"/>
                                    <option value="1" label="1 hour"/>
                                    <option value="2" label="2 hours"/>
                                    <option value="3" label="3 hours"/>
                                </select>
                                {formik.touched.hour && formik.errors.hour ? (
                                    <div style={{ color: "red" }}>{formik.errors.hour}</div>
                                ) : null}
                                <select
                                    id="inputCreateLogin"
                                    name="minute"
                                    placeholder=""
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.minute}
                                    style={{ display: 'block' }}
                                >
                                    <option value="" label="Select minute(s)"/>
                                    <option value="0" label="0"/>
                                    <option value="5" label="5 minutes"/>
                                    <option value="10" label="10 minutes"/>
                                    <option value="15" label="15 minutes"/>
                                    <option value="20" label="20 minutes"/>
                                    <option value="25" label="25 minutes"/>
                                    <option value="30" label="30 minutes"/>
                                    <option value="35" label="35 minutes"/>
                                    <option value="40" label="40 minutes"/>
                                    <option value="45" label="45 minutes"/>
                                    <option value="50" label="50 minutes"/>
                                    <option value="55" label="55 minutes"/>
                                </select>
                                {formik.touched.minute && formik.errors.minute ? (
                                    <div style={{ color: "red" }}>{formik.errors.minute}</div>
                                ) : null}
                            </div>
                            <label>notes: </label>
                            <input
                                autoComplete='off'
                                id="inputCreatePosts"
                                name="description"
                                type="text"
                                placeholder=""
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                            />
                            {formik.touched.description && formik.errors.description ? (
                            <div style={{ color: "red" }}>{formik.errors.description}</div>
                            ) : null}
                            <button type="submit" onClick={()=>{ refreshPage(); setCount(count+1);}} disabled={!(formik.dirty && formik.isValid)}>
                            Add
                            </button>
                        </Form>
                    </Formik>
                </div>
            </Popup>
        </div>
    )
}

export default Waitlist
