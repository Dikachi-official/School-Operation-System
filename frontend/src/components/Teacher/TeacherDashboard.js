import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/user';

function TeacherDashboard() {
    const [dashboardData, setdashboardData]=useState([]);
    const teacherId=localStorage.getItem['teacherId']


    useEffect(()=>{
        // Fetch coures
        try{
            axios.get(baseUrl+'/teacher/dashboard/'+teacherId)
            .then((res)=>{
                console.log(res);
                setdashboardData(res.data);
            });
        }catch(error){
            console.log(error);
        }

        //page Title
        document.title='Teacher Dashboard'
    }, []);


    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card border-primary'>
                                <h5 className='card-header bg-primary text-white'>Total Courses</h5>
                                <div className='card-body'>
                                    <h4><Link to='/teacher-courses'>{dashboardData.total_teacher_courses}</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card border-primary'>
                                <h5 className='card-header bg-primary text-white'>Total Students</h5>
                                <div className='card-body'>
                                    <h4><Link to='/my-students'>{dashboardData.total_teacher_students}</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card border-primary'>
                                <h5 className='card-header bg-primary text-white'>Total Chapters</h5>
                                <div className='card-body'>
                                    <h4><Link to='/teacher-courses'>{dashboardData.total_teacher_chapters}</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
            </div>
        </div>
    )
}

export default TeacherDashboard