import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/user';

function TeacherDetail() {
    const [courseData, setCourseData]=useState([]);
    const [teacherData, setTeacherData]=useState([]);
    const [skillList, setskillList]=useState([]);

    let {teacher_id} = useParams();


    //Fetch courses after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/teacher/'+teacher_id+'/')
            .then((res)=>{
                console.log(res);
                setTeacherData(res.data);
                setCourseData(res.data.teacher_courses);
                setskillList(res.data.skill_list);
            });
        }catch(error){
            console.log(error);
        }

        // Course title on react page
        document.title='Teacher Detail'
    }, []);

    console.log(teacherData);


    
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src={teacherData.image} className="img-thumbnail" alt="Teacher"/>
            </div>

            <div className='col-8'>
                <h3 className='fw-bold text-start'>{teacherData.full_name}</h3>
                <p className='fw-bold text-start'>Bio: {teacherData.bio}</p>
                <p className='fw-bold text-start'>Qualification: {teacherData.qualification}</p>
                <p className='fw-bold text-start'>
                    Skills: 
                    {skillList.map((skill,index)=>
                        <Link to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`} className='badge bg-warning badge-pill text-dark'>{skill.trim()}</Link>
                    )}
                </p>


            </div>
        </div>


        {/*=== COURSE LIST ===*/}
        <div className='mt-4 mb-4' >
            <div className="card">
                <h5 className="card-header">
                    Course List
                </h5>
                <div className="list-group list-group-flush text-start">
                    {courseData.map((course, index)=> <Link to={`/detail/${course.id}`} className='list-group-item list-group-item-action'>{course.title}</Link>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherDetail