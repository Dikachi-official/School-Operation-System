import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';





const baseUrl='http://127.0.0.1:8000/user';
function Login() {

    const [studentLoginData,setStudentLoginData]=useState({
        email : '',
        password : '',
    });


    // Error message state
    const [errorMsg, setErrorMsg]=useState('');


    // Change in Input
    const handleChange=(event)=>{
        setStudentLoginData({
            ...studentLoginData,
            [event.target.name]:event.target.value
        });
    }
    // End of change in Input




    //Submit Form
    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append('email',studentLoginData.email)
        studentFormData.append('password',studentLoginData.password)
        try{
            axios.post(baseUrl+'/student-login/',studentFormData)
            .then((res)=>{
                if(res.data.bool===true){
                    localStorage.setItem('studentLoginStatus',true);
                    localStorage.setItem('studentId',res.data.student_id);
                    //redirect to dashboard after login
                    window.location.href='/user-dashboard';
                }else{
                    setErrorMsg('Invalid Email or Password!!!');
                }
            });
        }catch(error){
            console.log(error);
        }
        
    }
    // End of Submit Form




    // If logged in student tries accessing login page, redirect to his dashbord
    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    if (studentLoginStatus==='true'){
        window.location.href='/user-dashboard';
    }



    useEffect(()=>{
        document.title='Student Login'
    });



    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
    }





  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h3 className="card-header">Student Login</h3>
                    <div className='card-body'>
                        {errorMsg && <p className='text danger'>{errorMsg}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control"
                                    id="exampleInputEmail1"
                                    value={studentLoginData.email}
                                    onChange={handleChange}
                                    name='email'
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={studentLoginData.password}
                                    onChange={handleChange}
                                    name='password'
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

export default Login