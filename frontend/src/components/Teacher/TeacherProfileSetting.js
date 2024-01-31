import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/user';

function TeacherProfileSetting() {

    const [teacherData, setTeacherData]=useState({
        full_name : '',
        email: '',
        qualification : '',
        mobile_no : '',
        profile_img :'',
        p_img :'',
        skills : '',
        status : ''
    });



    const teacherId=localStorage.getItem('teacherId');

    //Fetch categories after page refresh
    useEffect(()=>{

        // Fetch current teacher data
        try{
            axios.get(baseUrl+'/teacher/'+teacherId+'/')
            .then((res)=>{
                setTeacherData({
                    full_name: res.data.full_name,
                    email: res.data.email,
                    qualification: res.data.qualification,
                    mobile_no: res.data.mobile_no,
                    profile_img: res.data.profile_img,
                    p_img: '',  // The new profile image at form upload
                    skills: res.data.skills,

                });

            });
        }catch(error){
            console.log(error);
        }
        // End


        // Course title on react page
        document.title='Edit Course'
    },[]);



    // Change in Input
    const handleChange=(event)=>{
        setTeacherData({
        ...teacherData,
        [event.target.name]:event.target.value
        });
    }
    // End of change in Input


    // Change in File Input
    const handleFileChange=(event)=>{
        setTeacherData({
          ...teacherData,
          [event.target.name]:event.target.files[0]
        });
    }


     //Submit Form
    const submitForm=()=>{
        const teacherFormData=new FormData();
        teacherFormData.append("full_name", teacherData.full_name)
        teacherFormData.append("email", teacherData.email)
        teacherFormData.append("qualification", teacherData.qualification)
        teacherFormData.append("mobile_no", teacherData.mobile_no)
        teacherFormData.append("skills", teacherData.skills)

        if (teacherData.p_img!==''){
            teacherFormData.append("profile_img", teacherData.p_img,teacherData.p_img.name)
        }
        
        // "put" new data back to the api
        try{
            axios.put(baseUrl+'/teacher/'+teacherId+'/',teacherFormData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                // If the data above has been put to api, then sweetalert
                if(res.status==200){
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
        setTeacherData({'status':'error'})
        }

    };
    // End of Submit Form



    useEffect(()=>{
        document.title='Teacher Settings'
    });



    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
    }


      // If user not logged in tries accessing profile-settings, redirect to login
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus!=='true'){
        window.location.href='/teacher-login';
    }





    return (
        <div className='container mt-4 mb-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'> Teacher Profile settings</h5>
                        <div className='card-body'>
                      
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label ml-1">
                                        Fullname
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="text" className="form-control" 
                                            value={teacherData.full_name} onChange={handleChange} name='full_name'
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
                                            value={teacherData.email} onChange={handleChange} name='email'
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label for='video' className='form-label'>Profile Photo</label>
                                    <div className='col-sm-10'>
                                        <input type="file" id="file" onChange={handleFileChange} name='image' className='form-control'/>
                                        {teacherData.profile_img &&
                                        <p className='mt-2'><img src={teacherData.profile_img} width="300" alt={teacherData.full_name}/></p>
                                        }
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Qualification
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="text" className="form-control"
                                            value={teacherData.qualification} onChange={handleChange} name='qualification'
                                            id="exampleInputText1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Mobile Number
                                    </label>
                                    <div className='col-sm-10'>
                                        <input type="number" className="form-control"
                                            value={teacherData.mobile_no} onChange={handleChange} name='mobile_no'
                                            id="exampleInputNumber1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Skills
                                    </label>
                                    <div className='col-sm-10 '>
                                        <textarea className="form-control" aria-describedby="emailHelp"
                                            value={teacherData.skills} onChange={handleChange} name='skills'
                                        >
                                        </textarea>
                                    </div>
                                    <div id='emailHelp'className='form-text'>Mathematics, Thermodynmics, Vibration</div>
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={submitForm}>
                                    Register
                                </button>
                            </form>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default TeacherProfileSetting;