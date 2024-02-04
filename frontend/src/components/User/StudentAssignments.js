import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';

function StudentAssignments() {
    const [assignmentData, setassignmentData]=useState([]);

    const studentId=localStorage.getItem('studentId');
    console.log(studentId)
    // Fetch all students courses for student
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/my-assignments/'+studentId+'/')
            .then((res)=>{
                setassignmentData(res.data);

            });
        }catch(error){
            console.log(error);
        }


        document.title='Student Assignments'
    }, []);



    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Student Assignment</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Detail</th>
                                        <th>Lecturer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignmentData.map((row,index)=> 
                                    <tr>
                                    
                                        <td>{row.title}</td>
                                        <td>{row.detail}</td>
                                        <td>{row.teacher.full_name}</td>
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

export default StudentAssignments;