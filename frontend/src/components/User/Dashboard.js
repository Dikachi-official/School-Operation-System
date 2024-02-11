import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';



const baseUrl='http://127.0.0.1:8000/user';

function Dashboard() {
    const [dashboardData, setdashboardData]=useState([]);
    const studentId=localStorage.getItem('studentId');


    useEffect(()=>{
        // Fetch coures
        try{
            axios.get(baseUrl+'/student/dashboard/'+studentId)
            .then((res)=>{
                console.log(res);
                setdashboardData(res.data);
            });
        }catch(error){
            console.log(error);
        }


        //page Title
        document.title='Student Dashboard'
    });


    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card border-primary'>
                                <h5 className='card-header bg-primary text-white'>Enrolled Courses</h5>
                                <div className='card-body'>
                                    <h4><Link to='/my-courses'>{dashboardData.enrolled_courses}</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card border-primary'>
                                <h5 className='card-header bg-primary text-white'>Favorite Courses</h5>
                                <div className='card-body'>
                                    <h4><Link to='/favorite-courses'>{dashboardData.favorite_courses}</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card border-primary'>
                                <h5 className='card-header bg-primary text-white'>Assignments</h5>
                                <div className='card-body'>
                                    <h6>
                                        <Link to='/my-assignments'>
                                            Completed: {dashboardData.completed_assignments}
                                            <br/>
                                            Pending: {dashboardData.pending_assignments}
                                        </Link>
                                    </h6>
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

export default Dashboard;