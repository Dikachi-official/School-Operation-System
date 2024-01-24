import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';

function TeacherSkillCourses() {
    
    const [courseData, setCourseData]=useState([]);
    const {skill_name, teacher_id}=useParams()

    //Fetch courses after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/?skill_name='+skill_name+'&teacher='+teacher_id)
            .then((res)=>{
                setCourseData(res.data);

            });
        }catch(error){
            console.log(error);
        }

        // Course title on react page
        document.title='TeacherSkillCourses'
    }, []);





  return (
    <div className='container mt-3' >
        <h3>All courses</h3>
        {/*=== LATEST COURSES ===*/}
        <h3 className='pb-1 mb-4 mt-4 text-start'>{skill_name}  <Link to="" className="ml-7">See All...</Link></h3>
            <div className='row p-2'>
                {courseData && courseData.map((course,index)=>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to={`/detail/${course.id}`}>
                            <img src={course.image} width="400" className="card-img-top" alt={course.title} />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/detail/1'>{course.title}</Link></h5>
                            <p className="card-text">{course.description}</p>
                            <Link to={`/detail/${course.id}`} className="btn btn-primary">View</Link>
                        </div>
                    </div>
                </div>
                )}
            </div>
            {/*=== END OF LATEST COURSES ===*/}
    </div>
  )
}

export default TeacherSkillCourses;