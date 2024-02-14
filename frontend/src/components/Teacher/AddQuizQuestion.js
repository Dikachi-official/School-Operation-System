import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';




const baseUrl='http://127.0.0.1:8000/api';
function AddQuizQuestion() {
    const [questionData, setquestionData]=useState({
        quiz:'',
        question:'',
        ans1:'',
        ans2:'',
        ans3:'',
        ans4:'',
        right_ans:'',
    });


    //Fetch categories after page refresh
    useEffect(()=>{

        // Course title on react page
        document.title='Add Quiz Question'
    },[]);


    // Change in Input
    const handleChange=(event)=>{
        setquestionData({
          ...questionData,
          [event.target.name]:event.target.value
        });
    }


    const {quiz_id}=useParams()

    //Submit Form
    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append("quiz",quiz_id);
        _formData.append("question", questionData.question);
        _formData.append("ans1", questionData.ans1);
        _formData.append("ans2", questionData.ans2);
        _formData.append("ans3", questionData.ans3);
        _formData.append("ans4", questionData.ans4);
        _formData.append("right_ans", questionData.right_ans);
        
        try{
            axios.post(baseUrl+'/quiz-questions/'+quiz_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                //console.log(res.data)

                if (res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Data has been uploaded',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
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



    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
      }


    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Question</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>A</label>
                                    <input type="text" onChange={handleChange} name='ans1' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>B</label>
                                    <input type="text" onChange={handleChange} name='ans2' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>C</label>
                                    <input type="text" onChange={handleChange} name='ans3' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>D</label>
                                    <input type="text" onChange={handleChange} name='ans4' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Right Answer</label>
                                    <input type="text" onChange={handleChange} name='right_ans' id="title" className='form-control'/>
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

export default AddQuizQuestion;