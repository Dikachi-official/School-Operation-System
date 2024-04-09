import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';
function QuizResult(props) {
    const [resultData, setresultData]=useState([]);
    const [courseData, setCourseData]=useState([]);
    // To check if student is enrolled in a  course
    const [assignStatus, setassignStatus]=useState([]);

    //Fetch teacher quiz after page refresh
    useEffect(()=>{
        try{
            axios.get(`${baseUrl}/fetch-quiz-result/${props.quiz}/${props.student}`)
            .then((res)=>{
                setresultData(res.data);
            });
        }catch(error){
            console.log(error);
        }

    }, []);

    console.log(resultData);





    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Quiz Result</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <table className='table table-bordered'>
                        <tr>
                            <td>Total Questions</td>
                            <td>10</td>
                        </tr>

                        <tr>
                            <td>Attempted Questions</td>
                            <td>5</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default QuizResult;