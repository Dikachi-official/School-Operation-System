import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';

function CheckQuizInCourse(props){
    const [quizData, setquizData]=useState([]);

    // To check if student is enrolled in a  course
    const [assignStatus, setassignStatus]=useState([]);

    const studentId=localStorage.getItem('studentId');

    //Fetch teacher quiz after page refresh
    useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`)
            .then((res)=>{
                setquizData(res.data);
            });
        }catch(error){
            console.log(error);
        }

    }, []);






    return (
        <td>
            {quizData.bool===true &&
                <span className='text-success'>Attempted</span> 
            }
            {quizData.bool=== false &&
                <Link to={`/take-quiz/${props.quiz}`} className='btn btn-success btn-sm ms-2'>Take Quiz</Link>
            }
        </td>
    )
}

export default CheckQuizInCourse;
