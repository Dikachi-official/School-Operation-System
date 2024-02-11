import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';



const baseUrl='http://127.0.0.1:8000/user';

function ProfileSetting() {

    const [studentData, setstudentData]=useState({
        full_name : '',
        email: '',
        username : '',
        mobile_no : '',
        profile_img :'',
        p_img :'',
        interested_categories : '',
        status : ''
    });

    const studentId=localStorage.getItem('studentId');

    useEffect(()=>{

        // Fetch current student data
        try{
            axios.get(baseUrl+'/student/'+studentId+'/')
            .then((res)=>{
                setstudentData({
                    full_name: res.data.full_name,
                    email: res.data.email,
                    username: res.data.username,
                    mobile_no: res.data.mobile_no,
                    profile_img: res.data.profile_img,
                    p_img: '',  // The new profile image at form upload
                    interested_categories: res.data.interested_categories,

                });

            });
        }catch(error){
            console.log(error);
        }
        // End


        document.title='student Profile Settings'
    },[]);



    // Change in Input
    const handleChange=(event)=>{
        setstudentData({
        ...studentData,
        [event.target.name]:event.target.value
        });
    }
    // End of change in Input


    // Change in File Input
    const handleFileChange=(event)=>{
        setstudentData({
          ...studentData,
          [event.target.name]:event.target.files[0]
        });
    }



     //Submit Form
     const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append("full_name", studentData.full_name)
        studentFormData.append("email", studentData.email)
        studentFormData.append("username", studentData.username)
        studentFormData.append("interested_categories", studentData.interested_categories)
        studentFormData.append("mobile_no", studentData.mobile_no)

        if (studentData.p_img!==''){
            studentFormData.append("profile_img", studentData.p_img,studentData.p_img.name)
        }
        

        
        // "put" new data back to the api
        try{
            axios.put(baseUrl+'/student/'+studentId+'/',studentFormData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                // If the data above has been put to api, then sweetalert
                if(res.status===200){
                    Swal.fire({
                        title: 'Data has been updated',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });

                }

            });
        }catch(error){
        console.log(error);
        setstudentData({'status':'error'})
        }

    };
    // End of Submit Form



    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
    }


      // If user not logged in tries accessing profile-settings, redirect to login
    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    if (studentLoginStatus!=='true'){
        window.location.href='/student-login';
    }


    return (
        <div className='container mt-4 mb-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'> Student Profile settings</h5>
                        <div className='card-body'>
                      
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label ml-1">
                                        Fullname
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="text" className="form-control" 
                                            value={studentData.full_name} onChange={handleChange} name='full_name'
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="email" className="form-control"
                                            value={studentData.email} onChange={handleChange} name='email'
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Username
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="text" className="form-control"
                                            value={studentData.username} onChange={handleChange} name='username'
                                            id="exampleInputText1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label for='video' className='form-label'>Profile Photo</label>
                                    <div className='col-sm-10'>
                                        <input type="file" id="file" onChange={handleFileChange} name='p_img' className='form-control'/>
                                        {studentData.profile_img &&
                                        <p className='mt-2'><img src={studentData.profile_img} width="300" alt={studentData.full_name}/></p>
                                        }
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Mobile Number
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="number" className="form-control"
                                            value={studentData.mobile_no} onChange={handleChange} name='mobile_no'
                                            id="exampleInputNumber1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Interested Categories
                                    </label>
                                    <div className='col-sm-10 '>
                                        <textarea className="form-control" aria-describedby="emailHelp"
                                            value={studentData.interested_categories} onChange={handleChange} name='interested_categories'
                                        >
                                        </textarea>
                                    </div>
                                    <div id='emailHelp'className='form-text'>Mathematics, Thermodynmics, Vibration</div>
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={submitForm}>
                                    Update Profile
                                </button>
                            </form>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ProfileSetting;