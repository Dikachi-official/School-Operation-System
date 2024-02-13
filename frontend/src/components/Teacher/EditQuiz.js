import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';

function EditQuiz() {
    const [quizData, setquizData]=useState({
        title:'',
        detail:'',
    });

    const teacherId=localStorage.getItem('teacherId');

    const {quiz_id}=useParams(); // Based on what u passed in its respective route


    //Fetch categories after page refresh
    useEffect(()=>{

        // Fetch current quiz data
        try{
            axios.get(baseUrl+'/teacher-quiz-detail/'+quiz_id)
            .then((res)=>{
                setquizData({
                    title: res.data.title,
                    detail: res.data.detail,
                });

            });
        }catch(error){
            console.log(error);
        }
        // End


        // Course title on react page
        document.title='Edit Quiz'
    },[]);


    // Change in Input
    const handleChange=(event)=>{
        setquizData({
          ...quizData,
          [event.target.name]:event.target.value
        });
    }

      //Submit Form
    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append("teacher", teacherId);
        _formData.append("title", quizData.title)
        _formData.append("detail", quizData.detail)

        // "put" new data back to the api
        try{
            axios.put(baseUrl+'/teacher-quiz-detail/'+quiz_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                if(res.status==200){
                    Swal.fire({
                        title: 'Data has been updated',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });

                }
            });
        }
        catch(error){
            console.log(error);
        }

    };
    // End of Submit Form



    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
      }



    return (
        <div className='container mt-4 mb-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Edit Quiz</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} value={quizData.title} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='description' className='form-label'>Detail</label>
                                    <textarea id="detail" onChange={handleChange} value={quizData.detail} name='detail' className='form-control'></textarea>
                                </div>
                                
                                <button type="submit" className='btn btn-primary' onClick={formSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default EditQuiz;