import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/user';

function TeacherChangePassword() {

    const [teacherData, setTeacherData]=useState({
        password : ''
    });


    const teacherId=localStorage.getItem('teacherId');


    useEffect(()=>{
        document.title='Teacher Change Password'
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
        teacherFormData.append("password", teacherData.password)
        
        // "put" new data back to the api
        try{
            axios.post(baseUrl+'/teacher/change-password/'+teacherId+'/',teacherFormData)
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

                    window.location.href='/teacher-logout';
                }
                else{
                    alert('Oops... An error occured')
                }

            });
        }catch(error){
        console.log(error);
        setTeacherData({'status':'error'})
        }

    };
    // End of Submit Form


    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
    }


    // If user not logged in tries accessing profile-settings, redirect to login
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus!=='true'){
        window.location.href='/teacher-login';
    }







    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Change Password</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3 row'>
                                    <label for='inputPassword' className='col-sm-2 col-form-label'>New Password</label>
                                    <div className='col-sm-10'>
                                        <input type='text' 
                                        value={teacherData.password}
                                        onChange={handleChange}
                                        name='password'
                                        className='form-control' 
                                        id="inputPassword"/>
                                    </div>
                                </div>
                                <hr/>
                                <button type="submit" className='btn btn-primary' onClick={submitForm}>Update</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TeacherChangePassword;