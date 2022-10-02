import React from 'react'
import {useFormik, Formik, Form} from 'formik';
import {BrowserRouter as Route} from 'react-router-dom';
import * as Yup from 'yup';
import axios from "axios";
import Homepage from "./Homepage";
import {SidebarWelcome} from '../Components/SidebarWelcome';

function Register() {
  
  const formik = useFormik({
    initialValues: {
      email:'',
      password:'',
      confirmPass:'',
      name:'',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email adress').required('Required'),
      password: Yup.string()
        .min(7, 'Must be more than 7 characters')
        .max(20, 'Must be less than 20 characters')
        .required('Required'),
      confirmPass: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      name: Yup.string().required('Required'),
    }),

    onSubmit: (data) => {
      axios.post("http://localhost:3001/users", data).then(()=>{
        console.log("Registration Successful");
      });
    },

  });

  return (
    <div className="registerPage">
      <Formik
        onSubmit={formik.handleSubmit}>
          <Form className="formContainer">
          <label>Enter a valid Email: </label>
            <input
              autoComplete="off"
              id="inputCreateLogin"
              name="email"
              type="email"
              placeholder="(Ex. ...@uta.edu)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <label>Create a Password: </label>
            <input
              autoComplete="off"
              id="inputCreateLogin"
              name="password"
              type="password"
              placeholder="(Password)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
            <label>Confirm your Password: </label>
            <input
              autoComplete="off"
              id="inputCreateLogin"
              name="confirmPass"
              type="password"
              placeholder="(Confirm Password)"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPass}
            />
            {formik.touched.confirmPass && formik.errors.confirmPass ? (
              <div style={{ color: "red" }}>{formik.errors.confirmPass}</div>
            ) : null}
            <label>Enter your Name: </label>
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
            <button type="submit" disabled={!(formik.dirty && formik.isValid)} 
              onClick={()=> { window.location.pathname = "/"}}>
              Register
            </button>
          </Form>
        </Formik>
      <div className="register">
        Back to
        {SidebarWelcome.map((val, key) => {
          return (
            <ins
              key={key}
              className="link"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={()=> {
                  window.location.pathname = val.link
              }}
            > Login</ins>
          );
        })}
      </div>
    </div>
  )
}

export default Register