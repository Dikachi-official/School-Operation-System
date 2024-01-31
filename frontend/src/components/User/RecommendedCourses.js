import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';

function RecommendedCourses() {
    const [courseData, setCourseData]=useState([]);
    const {course_id}=useParams()


    const studentId=localStorage.getItem('studentId');

    console.log(studentId);

    // Fetch all students courses for student
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-recommended-courses/'+studentId+'/')
            .then((res)=>{
                setCourseData(res.data);

            });
        }catch(error){
            console.log(error);
        }


        document.title='Recommended Courses'
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
                        <h5 className='card-header'>Recommended Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Technologies</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((row,index)=> 
                                    <tr>
                                        <td><Link to={/teacher-detail/+row.teacher.id}> {row.teacher.full_name}</Link></td>
                                        <td><Link to=''>{row.course}</Link>{row.technologies}</td>
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

export default RecommendedCourses;