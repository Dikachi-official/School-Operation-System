import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';



const baseUrl='http://127.0.0.1:8000/user/students/';

function Register() {

  const [studentData, setStudentData]=useState({
    full_name : '',
    email: '',
    username : '',
    password : '',
    mobile_no : '',
    interested_categories : '',
    status : ''
  });


  // Change in Input
  const handleChange=(event)=>{
    setStudentData({
      ...studentData,
      [event.target.name]:event.target.value
    });
  }
  // End of change in Input


  //Submit Form
  const submitForm=()=>{
    const studentFormData=new FormData();
    studentFormData.append("full_name", studentData.full_name)
    studentFormData.append("email", studentData.email)
    studentFormData.append("username", studentData.username)
    studentFormData.append("password", studentData.password)
    studentFormData.append("mobile_no", studentData.mobile_no)
    studentFormData.append("interested_categories", studentData.interested_categories)
    
    try{
      axios.post(baseUrl,studentFormData).then((response)=>{
        setStudentData({
          'full_name': '',
          'email': '',
          'username' : '',
          'password': '',
          'mobile_no': '',
          'interested_categories' : '',
          'status' : 'success'     
        });

      });
    }catch(error){
      console.log(error);
      setStudentData({'status':'error'})
    }

  };
  // End of Submit Form


  useEffect(()=>{
    document.title='Student Registration'
  });

  const handleSubmit = async e => {   //handleSubmiting of the form
    e.preventDefault()   //Preventpage refresh
  }



  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 offset-3">
                {studentData.status==='success' && <p className="text-success m-2">Thanks for your registration</p>}
                {studentData.status==='error' && <p className="text-danger m-2">Something wrong happened</p>}
                <div className="card">
                    <h3 className="card-header">Student Register</h3>
                    <div className='card-body'>
                      <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Fullname
                          </label>
                          <input type="text" className="form-control"
                              value={studentData.full_name}
                              name = 'full_name'
                              onChange={handleChange}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Username
                          </label>
                          <input type="text" className="form-control"
                              value={studentData.username}
                              name = 'username'
                              onChange={handleChange}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                          </label>
                          <input type="email" className="form-control"
                            value={studentData.email}
                            name = 'email'
                            onChange={handleChange}
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
                            value={studentData.password}
                            onChange={handleChange}
                            name = 'password'
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Mobile Number
                          </label>
                          <input type="number" className="form-control"
                            value={studentData.mobile_no} onChange={handleChange} name='mobile_no'
                            id="exampleInputNumber1"
                            aria-describedby="emailHelp"
                          />
                        </div>


                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Interested Categories
                          </label>
                          <textarea className="form-control" value={studentData.interested_categories} name = 'interested_categories' onChange={handleChange} aria-describedby="emailHelp">
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

export default Register