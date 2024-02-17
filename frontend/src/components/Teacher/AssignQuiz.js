import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';
function AssignQuiz() {
    const [quizData, setquizData]=useState([]);
    const [courseData, setCourseData]=useState([]);
    const {course_id}=useParams()
    const {quiz_id}=useParams()
    // To check if student is enrolled in a  course
    const [assignStatus, setassignStatus]=useState([]);


    const teacherId=localStorage.getItem('teacherId');
    console.log(teacherId);
    //Fetch teacher quiz after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher-quiz/'+teacherId+'/')
            .then((res)=>{
                setquizData(res.data);

            });
        }catch(error){
            console.log(error);
        }


        // Fetch Course
        try{
            axios.get(baseUrl+'/course/'+course_id)
            .then((res)=>{
                setCourseData(res.data);
               
            });
        }catch(error){
            console.log(error);
        }


        // Fetch Assigned Status
        try{
            axios.get(baseUrl+'/fetch-assign-status/'+teacherId+'/'+quiz_id)
            .then((res)=>{
                console.log(res);
                if (res.data.bool === true){
                    setassignStatus('success');
                }
            });
        }catch(error){
            console.log(error);
        }



        // Course title on react page
        document.title='All Quiz'
    }, []);

    console.log(quizData);





    //Assign quiz to the course
    const assignQuiz = (quiz_id)=>{
        const studentId=localStorage.getItem('studentId');
        const _formData=new FormData();
        _formData.append('teacher', teacherId);
        _formData.append("course", course_id);
        _formData.append("quiz", quiz_id);
        
        try{
            axios.post(baseUrl+'/quiz-assign-course/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)
                //window.location.href='/add-courses';

                if (res.status===200||res.status===201){
                    Swal.fire({
                        title: 'Quiz is successfully assigned in the course',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setassignStatus('success');
                    window.location.reload();
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }





    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Assign Quiz <span className='text-primary'>({courseData.title})</span></h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizData.map((row,index)=>
                                    
                                        <tr>
                                            <td>
                                                <Link to={'/all-questions/'+row.id}>{row.title}</Link>
                                            </td>
                                            <td>
                                                {row.assign_status === 0 &&
                                                    <button onClick={()=>assignQuiz(row.id)} className='btn btn-success btn-sm'>Assign Quiz</button>
                                                }
                                                {row.assign_status > 0 && 
                                                    <span className='text-success'>Assigned</span>
                                                }
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AssignQuiz;