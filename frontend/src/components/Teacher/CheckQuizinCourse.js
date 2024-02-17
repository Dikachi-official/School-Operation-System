import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';
function CheckQuizinCourse(props) {
    const [quizData, setquizData]=useState([]);
    const [courseData, setCourseData]=useState([]);
    const {course_id}=useParams()
    const {quiz_id}=useParams()
    // To check if student is enrolled in a  course
    const [assignStatus, setassignStatus]=useState([]);


    const teacherId=localStorage.getItem('teacherId');
    console.log(teacherId);
    //Fetch teacher quiz after page refresh
    useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-assign-status/${props.quiz}/${props.course}`)
            .then((res)=>{
                setquizData(res.data);
            });
        }catch(error){
            console.log(error);
        }


        // Fetch Course
        // try{
        //     axios.get(baseUrl+'/course/'+course_id)
        //     .then((res)=>{
        //         setCourseData(res.data);
               
        //     });
        // }catch(error){
        //     console.log(error);
        // }


        // // Fetch Assigned Status
        // try{
        //     axios.get(baseUrl+'/fetch-assign-status/'+teacherId+'/'+quiz_id)
        //     .then((res)=>{
        //         console.log(res);
        //         if (res.data.bool === true){
        //             setassignStatus('success');
        //         }
        //     });
        // }catch(error){
        //     console.log(error);
        // }
    }, []);

    console.log(quizData);





    //Assign quiz to the course
    const assignQuiz = (quiz_id)=>{
        const _formData=new FormData();
        _formData.append('teacher', teacherId);
        _formData.append("course", props.course);
        _formData.append("quiz", props.quiz);
        
        try{
            axios.post(baseUrl+'/quiz-assign-course/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)
                //window.location.href='/add-courses';

                if (res.status===200||res.status===201){
                    // Swal.fire({
                    //     title: 'Quiz is successfully assigned in the course',
                    //     icon: 'success',
                    //     toast: true,
                    //     timer: 3000,
                    //     position: 'top-right',
                    //     timerProgressBar: true,
                    //     showConfirmButton: false
                    // });
                    // setassignStatus('success');
                    window.location.reload();
                }
            });
        }
        catch(error){
            console.log(error);
        }
    }





    return (
        <td>
            {quizData.bool===false &&
                <button onClick={()=>assignQuiz(props.quiz)} className='btn btn-success btn-sm ms-2'>Assign Quiz</button>
            }
            {quizData.bool=== true &&
                <span className='text-success'>Assigned</span>
            }
        </td>
    )
}

export default CheckQuizinCourse;