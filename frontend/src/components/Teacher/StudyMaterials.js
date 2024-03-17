import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';



const baseUrl='http://127.0.0.1:8000/api';
function StudyMaterials() {
    const [studyData, setstudyData]=useState([]);
    const [totalResult, settotalResult]=useState(0);
    const {course_id}=useParams()


    //Fetch courses after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/study-materials/'+course_id)
            .then((res)=>{
                settotalResult(res.data.length);
                setstudyData(res.data);

            });
        }catch(error){
            console.log(error);
        }

        // Course title on react page
        document.title='Course Chapters'
    }, []);

    // Delete Data with sweetalert2
    const Swal = require('sweetalert2');
    const handleDeleteClick = (study_id)=>{
        Swal.fire({
            title: 'Confirm',
            text: 'Are you sure you want to delete this data',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result)=>{
            if (result.isConfirmed){
                try{
                    axios.delete(baseUrl+'/student-materials/'+study_id)
                    .then((res)=>{
                        Swal.fire('success', 'Data has been deleted'); //To Prevent page refresh
                        try{
                            axios.get(baseUrl+'/student-materials/'+course_id)
                            .then((res)=>{
                                settotalResult(res.data.length);
                                setstudyData(res.data);
                
                            });
                        }catch(error){
                            console.log(error);
                        }
                    });
                }catch(error){
                    Swal.fire('error', 'Data has not been deleted');
                }
            }else{
                Swal.fire('error', 'Data has not been deleted');
            }
        });
    }



    
  return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>All Study Materials ({totalResult})<Link className='btn btn-success btn-sm float-end' to={'/add-study/'+course_id}>Add Study Materials</Link></h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Upload</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studyData.map((row,index)=>
                                    <tr>
                                        <td> <Link to={'/edit-study/'+row.id}>{row.title}</Link></td>
                                        <td><Link>{row.upload}</Link></td>
                                        <td>{row.remarks}</td>
                                        <td>
                                            <Link to={'/edit-study/'+row.id} className='btn btn-info btn-sm ms-1 text-white'><i className='bi bi-pencil-square'></i></Link>
                                            <button onClick={()=>handleDeleteClick(row.id)} to={'/delete-study/'+row.id} className='btn btn-danger btn-sm ms-1'><i className='bi bi-trash'></i></button>        
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

export default StudyMaterials;