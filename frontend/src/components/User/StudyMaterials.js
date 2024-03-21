import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
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
        document.title='Student Study Materials'
    }, []);




    
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
                                        <th>Detail</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studyData.map((row,index)=>
                                    <tr>
                                        <td>{row.title}</td>
                                        <td>{row.detail}</td>
                                        <td><Link t0={row.upload}>File</Link></td>
                                        <td>{row.remarks}</td>
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