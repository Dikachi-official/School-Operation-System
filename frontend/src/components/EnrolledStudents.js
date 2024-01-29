import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './Teacher/TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';
function EnrolledStudents() {
    const [studentData, setStudentData]=useState([]);
    const {course_id}=useParams()


    //Fetch enrolled students after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/fetch-enrolled-students/'+course_id)
            .then((res)=>{
                setStudentData(res.data);

            });
        }catch(error){
            console.log(error);
        }



        // Course title on react page
        document.title='Enrolled students'
    }, []);

    console.log(studentData);




    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Enrolled Students List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Action</th>
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
                                            <Link className='btn btn-info btn-sm ms-2' to={'/view-student/'+row.student.id}>View</Link>
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

export default EnrolledStudents;