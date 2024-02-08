import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';

function MyStudents() {
    const [studentData, setStudentData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');

    //Fetch enrolled students after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-all-enrolled-students/'+teacherId)
            .then((res)=>{
                setStudentData(res.data);

            });
        }catch(error){
            console.log(error);
        }



        // Course title on react page
        document.title='My students'
    }, []);

    //console.log(studentData);




    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Students List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Interested Categories</th>
                                        <th>Assignment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*== row to get the 2nd object 'student' after using serializer 'depth' ==*/}
                                    {studentData.map((row,index)=>  
                                    <tr>
                                        <td> <Link to={'/view-student/'+row.student.id}>{row.student.full_name}</Link></td>
                                        <td>{row.student.email}</td>
                                        <td>{row.student.username}</td>
                                        <td>
                                            {row.student.interested_categories}
                                        </td>
                                        <td>
                                            <Link to='#' className='btn btn-sm btn-warning'>Assignments</Link>
                                            <Link to={`/add-assignment/${row.student.id}/${teacherId}`} className='btn btn-sm btn-success ms-2'>Add Assignment</Link>
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

export default MyStudents;