import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
//import CheckQuizinCourse from './CheckQuizInCourse';
import { useState,useEffect } from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';

function AttemptedStudents() {
    const [studentData, setstudentData]=useState([]);
    const {quiz_id}=useParams();
    //const teacherId=localStorage.getItem('teacherId');
    
    // Fetch course when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/attempted-quiz/'+quiz_id+'/')
            .then((res)=>{
                setstudentData(res.data);

            });
        }catch(error){
            console.log(error);
        }


        // Course title on react page
        document.title='Attempted Students'

    }, []);



    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Student List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.map((row,index)=>
                                        <tr>
                                            <td>
                                                {row.student.full_name}
                                            </td>
                                            <td>
                                                {row.student.email}
                                            </td>
                                            <td>
                                                {row.student.username}
                                            </td>
                                            <td>
                                                <Link to='#'>Quiz result</Link>

                                                <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#resultModal${row.id}`}>
                                                Quiz Result
                                                </button>

                                                <div className="modal fade" id={`#resultModal${row.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Quiz Result</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                ...
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default AttemptedStudents;