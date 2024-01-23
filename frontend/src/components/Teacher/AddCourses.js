import React from 'react';
import { Link } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';


const baseUrl='http://127.0.0.1:8000/api';

function AddCourses() {
    const [cats, setCats]=useState([]);
    const [courseData, setCourseData]=useState({
        category: '',
        title:'',
        description:'',
        image:'',
        technologies:''
    });


    //Fetch categories after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category/')
            .then((res)=>{
                setCats(res.data);

            });
        }catch(error){
            console.log(error);
        }



        // Course title on react page
        document.title='Add Courses'
    },[]);

    console.log(cats);


    // Change in Input
    const handleChange=(event)=>{
        setCourseData({
          ...courseData,
          [event.target.name]:event.target.value
        });
    }

    // Change in File Input
    const handleFileChange=(event)=>{
        setCourseData({
          ...courseData,
          [event.target.name]:event.target.files[0]
        });
    }

      //Submit Form
    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append("category", courseData.category)
        _formData.append("teacher", 1);
        _formData.append("title", courseData.title)
        _formData.append("description", courseData.description)
        _formData.append("image", courseData.image,courseData.image.name)
        _formData.append("technologies", courseData.technologies)
        
        try{
            axios.post(baseUrl+'/course/',_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                console.log(res.data)
                window.location.href='/add-course';
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
                        <h5 className='card-header'>Add Courses</h5>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Category</label>
                                    <select name='category' className='form-control mb-5' onChange={handleChange}>
                                        {cats.map((category,index)=>{ return 
                                        <option key={index} value={category.id}>
                                            {category.title}
                                        </option>
                                        })}
                                    </select>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='description' className='form-label'>Description</label>
                                    <textarea id="description" onChange={handleChange} name='description' className='form-control'></textarea>
                                </div>

                                <div className='mb-3'>
                                    <label for='video' className='form-label'>Featured Image</label>
                                    <input type="file" id="file" onChange={handleFileChange} name='image' className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='tech' className='form-label'>Technologies</label>
                                    <textarea id="tech" onChange={handleChange} name='technologies' className='form-control' placeholder='Python, Php, HTML'></textarea>
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

export default AddCourses;