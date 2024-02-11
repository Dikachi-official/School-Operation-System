import React from 'react';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/user';

function StudentChangePassword() {

    const [studentData, setstudentData]=useState({
        password : ''
    });


    const studentId=localStorage.getItem('studentId');


    useEffect(()=>{
        document.title='Student Change Password'
    });



    // Change in Input
     const handleChange=(event)=>{
        setstudentData({
        ...studentData,
        [event.target.name]:event.target.value
        });
    }
    // End of change in Input




    //Submit Form
    const submitForm=()=>{
        const studentFormData=new FormData();
        studentFormData.append("password", studentData.password)
        


        // "post" new data back to the api (post method)
        try{
            axios.post(baseUrl+'/student/change-password/'+studentId+'/',studentFormData)
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

                    window.location.href='/student-logout';
                }
                else{
                    alert('Oops... An error occured')
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
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
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
                                        value={studentData.password}
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

export default StudentChangePassword;