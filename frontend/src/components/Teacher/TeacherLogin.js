import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';



const baseUrl='http://127.0.0.1:8000/user/teacher/';
function TeacherLogin() {

    const [teacherLoginData,setTeacherLoginData]=useState({
        email : '',
        password : '',
    });


    // Change in Input
    const handleChange=(event)=>{
        setTeacherLoginData({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        });
    }
    // End of change in Input


    //Submit Form
    const submitForm=()=>{
        const teacherFormData=new FormData();
        teacherFormData.append('email',teacherLoginData.email)
        teacherFormData.append('password',teacherLoginData.password)
        try{
            axios.post(baseUrl+'/teacher-login',teacherFormData)
            .then((res)=>{
                if(res.data.bool===true){
                    localStorage.setItem('teacherLoginStatus',true);
                    //redirect to dashboard after login
                    window.location.href='/teacher-dashboard';
                }
            });
        }catch(error){
            console.log(error);
        }
        
    }

    // If logged in teacher tries accessing login page, redirect to his dashbord
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus==='true'){
        window.location.href='/teacher-dashboard';
    }



    useEffect(()=>{
        document.title='Teacher Login'
    });


  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h3 className="card-header">Teacher Login</h3>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control"
                                    value={teacherLoginData.email} onChange={handleChange} name='email'
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={teacherLoginData.password} onChange={handleChange} name='password'
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input text-center" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Remember Me
                                </label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary" onClick={submitForm}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherLogin;