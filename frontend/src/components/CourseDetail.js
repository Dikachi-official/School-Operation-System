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
    // To check if student has rated a  course
    const [ratingStatus, setratingStatus]=useState();
    const [AvgRating, setAvgRating]=useState(0);
    // To mark favorites
    const [favoriteStatus, setfavoriteStatus]=useState();


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
                if(res.data.course_rating !== '' && res.data.course_rating!= null) {
                    setAvgRating(res.data.course_rating)
                }
               
            });
        }catch(error){
            console.log(error);
        }



        // Fetch Enrolled Status
        try{
            axios.get(baseUrl+'/fetch-enroll-status/'+studentId+'/'+course_id)
            .then((res)=>{
                console.log(res);
                if (res.data.bool === true){
                    setenrollStatus('success');
                }
            });
        }catch(error){
            console.log(error);
        }


        // Fetch Rating Status
        try{
            axios.get(baseUrl+'/fetch-rating-status/'+studentId+'/'+course_id)
            .then((res)=>{
                console.log(res);
                if (res.data.bool == true){
                    setratingStatus('success');
                }
            });
        }catch(error){
            console.log(error);
        }



        // Fetch Favorite Status for course
        try{
            axios.get(baseUrl+'/fetch-favorite-status/'+studentId+'/'+course_id)
            .then((res)=>{
                console.log(res);
                if (res.data.bool == true){
                    setfavoriteStatus('success');
                }else{
                    setfavoriteStatus('');
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






    // Marked as Favorite course   // Marked as Favorite course
    // Marked as Favorite course  // Marked as Favorite course
    const markedFavorite = ()=> {
        const _formData=new FormData();
        _formData.append("course", course_id)
        _formData.append("student", studentId);
        _formData.append("status", true);

        try{
            axios.post(baseUrl+'/student-add-favorite-course/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)
                //window.location.href='/add-courses';

                if (res.status==200||res.status==201){
                    Swal.fire({
                        title: 'This course has been added to your favorites list',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setfavoriteStatus('success');
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }

    const removeFavorite = (pk)=> {
        const _formData=new FormData();
        _formData.append("course", course_id)
        _formData.append("student", studentId);
        _formData.append("status", false);

        try{
            axios.get(baseUrl+'/student-remove-favorite-course/'+course_id+'/'+studentId,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)
                //window.location.href='/add-courses';

                if (res.status==200||res.status==201){
                    Swal.fire({
                        title: 'This course has been removed from your favorites list',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setfavoriteStatus('');
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }
    // End of Marked as Favorite course






    // Add Rating    // Add Rating
    // Add Rating   // Add Rating
    const [ratingData, setratingData]=useState({
        rating:'',
        reviews:'',
    });


    // Change in Input
    const handleChange=(event)=>{
        setratingData({
          ...ratingData,
          [event.target.name]:event.target.value
        });
    }



    //Submit Form
    const formSubmit=()=>{
        const _formRatingData=new FormData();
        _formRatingData.append("course", course_id);
        _formRatingData.append("student", studentId);
        _formRatingData.append("rating", ratingData.rating);
        _formRatingData.append("reviews", ratingData.reviews);
        
        try{
            axios.post(baseUrl+'/course-rating/',_formRatingData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)

                if (res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Rating has been saved',
                        icon: 'success',
                        toast: true,
                        timer: 4000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });   
                    window.location.reload();
                }
            });
        }
        catch(error){
            console.log(error);
        }

    };
    // End of Submit Form




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
                <p className='fw-bold text-start'>Rating: {AvgRating}/5</p>

                {/*=== if student is enrolled and logged in ===*/}
                {enrollStatus === 'success' && userLoginStatus === 'success' && 
                    <>
                    {ratingStatus !== 'success' &&
                    <button className='btn btn-success btn-sm ms-2' data-bs-toggle="modal" data-bs-target="#ratingModal">Rating</button>
                    }
                    {ratingStatus === 'success' &&
                    <small className='badge  bg-info text-dark ms-2'>You've already rated this course</small>
                    }
                    <div class="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Rate for {courseData.title}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" className="form-label">Rating</label>
                                            <select onChange={handleChange} className='form-control' name='rating'>
                                                <option value='1' name='rating'>1</option>
                                                <option value='2' name='rating'>2</option>
                                                <option value='3' name='rating'>3</option>
                                                <option value='4' name='rating'>4</option>
                                                <option value='5' name='rating'>5</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Review</label>
                                            <textarea onChange={handleChange}  className='form-control' name='reviews' rows='5'></textarea>
                                        </div>
                                        <button type="button" onClick={formSubmit} className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                }

                {/*=== if student is enrolled and logged in ===*/}
                {enrollStatus === 'success' && userLoginStatus === 'success' &&
                    <p className='fw-bold text-start'><span>You are already enrolled in this course</span></p>
                }

                {/*=== if student is logged in and not enrolled ===*/}
                {userLoginStatus === 'success' && enrollStatus !== 'success' &&
                    <p className='fw-bold text-start'><button onClick={enrollCourse} type="button" className='btn btn-success'>Enroll course</button></p>
                }

                {/*=== if student is logged in and favorite status hasnt been done ===*/}
                {userLoginStatus === 'success' && favoriteStatus !== 'success' &&
                    <p className='fw-bold text-start'><button onClick={markedFavorite} type="button" title="Add to favourite course" className='btn btn-outline-danger'><i className='bi bi-heart-fill'></i></button></p>
                }

                {/*=== if student is logged in and favorite status has been done ===*/}
                {userLoginStatus === 'success' && favoriteStatus === 'success' &&
                    <p className='fw-bold text-start'><button onClick={removeFavorite} type="button" title="Remove from favourite course" className='btn btn-danger'><i className='bi bi-heart-fill'></i></button></p>
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