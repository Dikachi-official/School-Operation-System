import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';




const siteUrl='http://127.0.0.1:8000';
const baseUrl='http://127.0.0.1:8000/api';


function CourseDetail() {
    const [courseData, setCourseData]=useState([]);
    const [chapterData, setChapterData]=useState([]);
    const [teacherData, setTeacherData]=useState([]);
    const [relatedcourseData, setrelatedcourseData]=useState([]);
    const [techListData, settechListData]=useState([]);
    // To check if loggedin
    const [userLoginStatus, setuserLoginStatus]=useState([]);
    // To check if student is enrolled in a  course
    const [enrollStatus, setenrollStatus]=useState([]);

    // Get student id from local storage
    const studentId=localStorage.getItem('studentId');


    let {course_id} = useParams();
    //Fetch courses after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/'+course_id)
            .then((res)=>{
                setCourseData(res.data);
                setTeacherData(res.data.teacher);
                setChapterData(res.data.course_chapters);
                setrelatedcourseData(JSON.parse[res.data.related_videos]);
                settechListData(res.data.tech_list);
            });
        }catch(error){
            console.log(error);
        }



        // Fetch Enrolled Status
        try{
            axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id)
            .then((res)=>{
                console.log(res);
                if (res.data.bool == true){
                    setenrollStatus('success');
                }
            });
        }catch(error){
            console.log(error);
        }


        
        // If logged in student tries accessing login page, redirect to his dashbord
        const studentLoginStatus=localStorage.getItem('studentLoginStatus')
        if (studentLoginStatus==='true'){
            setuserLoginStatus('success');
        }


        // Course title on react page
        document.title='Course Detail/Chapters'
    }, []);

    //console.log(relatedcourseData);
    //console.log(siteUrl);


    //Enroll in the course
    const enrollCourse = ()=>{
        const studentId=localStorage.getItem('studentId');
        const _formData=new FormData();
        _formData.append("course", course_id)
        _formData.append("student", studentId);
        
        try{
            axios.post(baseUrl+'/student-enroll-course/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)
                //window.location.href='/add-courses';

                if (res.status==200||res.status==201){
                    Swal.fire({
                        title: 'You have successfully enrolled in this course',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setenrollStatus('success');
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }


  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src={courseData.image} className="img-thumbnail" alt={courseData.title}/>
            </div>

            <div className='col-8'>
                <h3 className='text-start'>{courseData.title}</h3>
                <p className='text-start'>{courseData.description}</p>
                <p className='fw-bold text-start'>Course By: <Link to={`/teacher-detail/${teacherData.id}`}>{teacherData.full_name}</Link></p>
                <p className='fw-bold text-start'>Technology:  
                    {techListData.map((tech,index)=>
                        <Link to={`/category/${tech.trim()}`} className='badge bg-warning badge-pill text-dark'>{tech}</Link>
                    )}
                </p>
                <p className='fw-bold text-start'>Duration: 3 Hours 30 Minutes</p>
                <p className='fw-bold text-start'>Total Enrolled: {courseData.total_enrolled_students} Student(s) </p>
                <p className='fw-bold text-start'>Rating: 4.5/5</p>

                {/*=== if student is enrolled and logged in ===*/}
                {enrollStatus === 'success' && userLoginStatus === 'success' &&
                    <p className='fw-bold text-start'><span>You are already enrolled in this course</span></p>
                }

                {/*=== if student is logged in and not enrolled ===*/}
                {userLoginStatus === 'success' && enrollStatus !== 'success' &&
                    <p className='fw-bold text-start'><button onClick={enrollCourse} type="button" className='btn btn-success'>Enroll course</button></p>
                }

                {/*=== if student is not logged in ===*/}
                {userLoginStatus !== 'success' &&
                    <p className='fw-bold text-start'><Link to="/student-login">Login to enroll this course</Link></p>
                }

            </div>
        </div>


        {/*=== COURSE VIDEOS ===*/}
        <div className='mt-4 mb-4' >

            {/*=== if student is enrolled and logged in ===*/}
            {enrollStatus === 'success' && userLoginStatus === 'success' &&
                <div className="card">
                    <div className="card-header">
                        Course Context
                    </div>
                    <ul className="list-group list-group-flush text-start">
                        {chapterData.map((chapter,index)=>
                            <li className="list-group-item text-start">{chapter.title}
                                <span className='float-end'>
                                    <span className='me-5'>1 Hour 30 Minutes </span>
                                    <button className='btn btn-sm btn-danger float-right' data-bs-toggle="modal" data-bs-target="#videoModal1">
                                        <i class="bi bi-file-play-fill"></i>
                                    </button>
                                </span>

                                {/*=== VIDEO MODAL ===== */}
                                <div className='modal fade' id='videoModal1' tableindex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
                                    <div className='modal-dialog modal-lg'>
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <h5 className='modal-title' id='exampleModalLabel'>Video1</h5>
                                                <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
                                            </div>
                                            <div className='modal-body'>
                                                <div className='ratio ratio-16x9'>
                                                    <iframe src={chapter.video} title={chapter.title} allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*==== MODAL END ==== */}
                            </li>
                        )}
                    </ul>
                </div>
            }


            {/*=== RELATED COURSES ===*/}
            <h3 className='pb-1 mb-4 mt-5 text-start'>Related Courses <Link to="">See All...</Link></h3>
            <div className='row p-2'>
            {relatedcourseData && relatedcourseData.map((rcourse,index)=> 
                <div className='col-md-3 p-2' >
                    <div className="card" >
                        <Link target="__blank" to={`/detail/${rcourse.pk}`}><img src={`${siteUrl}media/${rcourse.fields.image}`} classname="card-img-top" 
                        alt={rcourse.fields.title} /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default CourseDetail