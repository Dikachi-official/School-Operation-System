import React from 'react';
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';




const baseUrl='http://127.0.0.1:8000/api';
function AddAssignment() {
    const [assignmentData, setassignmentData]=useState({
        title:'',
        detail:'',
    });


    //Fetch categories after page refresh
    useEffect(()=>{

        // Course title on react page
        document.title='Add Assignment'
    },[]);



    // Change in Input
    const handleChange=(event)=>{
        setassignmentData({
          ...assignmentData,
          [event.target.name]:event.target.value
        });
    }

    const {student_id}=useParams()
    const {teacher_id}=useParams()

    //Submit Form
    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append("teacher",teacher_id);
        _formData.append("title", assignmentData.title);
        _formData.append("detail", assignmentData.detail);
        _formData.append("student", student_id);
        
        try{
            axios.post(baseUrl+'/student-assignment/'+teacher_id+'/'+student_id+'/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)

                if (res.status===200||res.status===201){
                    Swal.fire({
                        title: 'Assignment has been added',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });

                    // Save Notification Data
                    const _notifData=new FormData();
                    _notifData.append('teacher', teacher_id);
                    _notifData.append('notif_subject', 'assignment');
                    _notifData.append('notif_for', 'student');
                    _notifData.append('student', student_id);
                    axios.post(baseUrl+'/save-notification/', _notifData,{
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    })
                    .then((res)=>{
                        console.log("Notification Added");
                    })
                    // End of Notification


                    window.location.reload();
                }
                // End Sweetalert
            });
        }
        catch(error){
            console.log(error);
        }

    };
    // End of Submit Form

    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
      }





    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Assignment</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='detail' className='form-label'>Detail</label>
                                    <textarea id="detail" onChange={handleChange} name='detail' className='form-control'></textarea>
                                </div>
                                
                                <button type="submit" className='btn btn-primary' onClick={formSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddAssignment;