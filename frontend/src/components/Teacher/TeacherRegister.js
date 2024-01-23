import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';



const baseUrl='http://127.0.0.1:8000/user/teachers/';
function TeacherRegister() {



  const [teacherData, setTeacherData]=useState({
    full_name : '',
    email: '',
    password : '',
    qualification : '',
    mobile_no : '',
    skills : '',
    status : ''
  });

  // Change in Input
  const handleChange=(event)=>{
    setTeacherData({
      ...teacherData,
      [event.target.name]:event.target.value
    });
  }
  // End of change in Input

  //Submit Form
  const submitForm=()=>{
    const teacherFormData=new FormData();
    teacherFormData.append("full_name", teacherData.full_name)
    teacherFormData.append("email", teacherData.email)
    teacherFormData.append("password", teacherData.password)
    teacherFormData.append("qualification", teacherData.qualification)
    teacherFormData.append("mobile_no", teacherData.mobile_no)
    teacherFormData.append("skills", teacherData.skills)
    
    try{
      axios.post(baseUrl,teacherFormData).then((response)=>{
        setTeacherData({
          'full_name': '',
          'email': '',
          'password': '',
          'qualification': '',
          'mobile_no': '',
          'skills': '',
          'status' : 'success'     
        })

      });
    }catch(error){
      console.log(error);
      setTeacherData({'status':'error'})
    }

  };
  // End of Submit Form


  // If logged in teacher tries accessing register page, redirect to his dashbord
  const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
  if (teacherLoginStatus==='true'){
      window.location.href='/teacher-dashboard';
  }


  useEffect(()=>{
    document.title='Teacher Register'
  });

  const handleSubmit = async e => {   //handleSubmiting of the form
    e.preventDefault()   //Preventpage refresh
  }



  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 offset-3">
                {teacherData.status==='success' && <p className="text-success m-2">Thanks for your registration</p>}
                {teacherData.status==='error' && <p className="text-success m-2">Something wrong happened</p>}
                <div className="card">
                    <h3 className="card-header">Teacher Register</h3>
                    <div className='card-body'>
                      
                      <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Fullname
                          </label>
                          <input type="text" className="form-control" 
                            value={teacherData.full_name} onChange={handleChange} name='full_name'
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                          </label>
                          <input type="email" className="form-control"
                            value={teacherData.email} onChange={handleChange} name='email'
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
                            value={teacherData.password} onChange={handleChange} name='password'
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Qualification
                          </label>
                          <input type="text" className="form-control"
                            value={teacherData.qualification} onChange={handleChange} name='qualification'
                            id="exampleInputText1"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Mobile Number
                          </label>
                          <input type="number" className="form-control"
                            value={teacherData.mobile_no} onChange={handleChange} name='mobile_no'
                            id="exampleInputNumber1"
                            aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Skills
                          </label>
                          <textarea className="form-control" aria-describedby="emailHelp"
                            value={teacherData.skills} onChange={handleChange} name='skills'
                          >
                          </textarea>
                          <div id='emailHelp'className='form-text'>Mathematics, Thermodynmics, Vibration</div>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={submitForm}>
                          Register
                        </button>
                      </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherRegister;