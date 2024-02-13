import React from 'react';
import TeacherSidebar from './TeacherSidebar';
import { useState } from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';

function AddQuiz() {
    const [quizData, setquizData]=useState({
        title:'',
        detail:'',
    });



    // Change in Input
    const handleChange=(event)=>{
        setquizData({
          ...quizData,
          [event.target.name]:event.target.value
        });
    }



    //Submit Form
    const formSubmit=()=>{
        const teacherId=localStorage.getItem('teacherId');
        const _formData=new FormData();
        _formData.append("teacher", teacherId);
        _formData.append("title", quizData.title)
        _formData.append("detail", quizData.detail)
        
        try{
            axios.post(baseUrl+'/quiz/',_formData,{
            })
            .then((res)=>{
                console.log(res.data)
                window.location.href='/add-quiz';
            });
        }
        catch(error){
            console.log(error);
        }

    };
    // End of Submit Form



    return (
        <div className='container mt-4 mb-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Quiz</h5>
                        <div className='card-body'>
                            <form>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='detail' className='form-label'>Detail</label>
                                    <textarea id="detail" onChange={handleChange} name='detail' className='form-control'></textarea>
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

export default AddQuiz;