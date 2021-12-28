import React from 'react'
import {useFormik, Formik, Form} from 'formik';
import * as Yup from 'yup';

function Homepage() {

    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
        },
    
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email adress').required('Required'),
            password: Yup.string()
                .min(7, 'Must be more than 7 characters')
                .max(20, 'Must be less than 20 characters')
                .required('Required'),
        }),
    
        onSubmit: (data) => {
            console.log(data);
        },
    });

    return (
        <div className="loginPage">
            <Formik
                onSubmit={formik.handleSubmit}>
                <Form className="formContainer">
                    <label>Email: </label>
                    <input 
                        autocomplete="off"
                        id="inputCreateLogin"
                        name="email"
                        type="email"
                        placeholder="(Ex. ...@uta.edu)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <label>Password: </label>
                    <input
                        autocomplete="off"
                        id="inputCreateLogin"
                        name="password"
                        type="password"
                        placeholder="(Password)"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
            <div className="register">
                Register Here
            </div>
        </div>
    );
}

export default Homepage
