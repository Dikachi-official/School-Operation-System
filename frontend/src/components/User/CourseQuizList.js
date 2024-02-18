import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';

function CourseQuizList() {
    const [courseData, setCourseData]=useState([]);

    const studentId=localStorage.getItem('studentId');
    console.log(studentId)
    // Fetch all students courses for student
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-enrolled-courses/'+studentId+'/')
            .then((res)=>{
                setCourseData(res.data);

            });
        }catch(error){
            console.log(error);
        }


        document.title='Course Quiz'
    }, []);

    console.log(courseData);


    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Quiz List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Quiz</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((row,index)=> 
                                    <>
                                    <tr>
                                        <td>Python Quiz</td>
                                        <td className='text-success'>Attempted</td>
                                    </tr>
                                    <tr>
                                        <td>Django Quiz</td>
                                        <td><Link to={'/take-quiz/1'} className='btn btn-sm btn-warning'>Take Quiz</Link></td>
                                    </tr>
                                    </>
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

export default CourseQuizList;