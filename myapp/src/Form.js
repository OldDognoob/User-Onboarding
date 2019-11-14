import React, {useState, useEffect} from React;
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';


// New User info: Name, Email, Password, Terms of Service (checkbox), Submit button

function NewUserForm(){
    //console.log(props);

    const newUserForm ={

    }

    return (
        <div className="NewUserForm">
            <Form>
                <ErrorMessage
                name="name"
                render={msg => <div className="error">{msg}</div>}
                />
                <label>
                    Name
                <Field
                name="name"
                type="text"
                placeholder="Name"
                />
                </label>

                <label>
                    Email
                    <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    />
                </label>

                <ErrorMessage
                name="password"
                render={msg => <div className="error">{msg}</div>}
                />
                <label>
                    Password
                    <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    />
                </label>

                <label>
                    Terms of Services
                    <Field
                    name="terms-of-services"
                    type="text"
                    placeholder="Terms of Services"
                    />
                </label>

               <button type="submit">Submit</button>
            </Form>
            
        </div>
    )
}

export default Form