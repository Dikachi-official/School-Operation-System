import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


const baseUrl='http://127.0.0.1:8000/api';

function EditCourse() {
    const [cats, setCats]=useState([]);
    const [courseData, setCourseData]=useState({
        category: '',
        title:'',
        description:'',
        prev_image:'',
        image:'',
        technologies:''
    });


    const {course_id}=useParams(); // Based on what u passed in its respective route


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


        // Fetch current course data
        try{
            axios.get(baseUrl+'/teacher-course-detail/'+course_id)
            .then((res)=>{
                setCourseData({
                    category: res.data.category,
                    title: res.data.title,
                    description: res.data.description,
                    prev_image: res.data.image,
                    image: '',
                    technologies: res.data.technologies,

                });

            });
        }catch(error){
            console.log(error);
        }
        // End


        // Course title on react page
        document.title='Edit Course'
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
        if (courseData.image!==''){
            _formData.append("image", courseData.image,courseData.image.name)
        }
        _formData.append("technologies", courseData.technologies)
        

        // "put" new data back to the api
        try{
            axios.put(baseUrl+'/teacher-course-detail/'+course_id,_formData,{
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



    return (
        <div className='container mt-4 mb-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Edit Course</h5>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Category</label>
                                    <select name='category' value={courseData.category} className='form-control' onChange={handleChange}>
                                        {cats.map((category,index)=>{ return <option key={index} value={category.id}>
                                                {category.title}
                                            </option>
                                        })}
                                    </select>
                                </div>

                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} value={courseData.title} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='description' className='form-label'>Description</label>
                                    <textarea id="description" onChange={handleChange} value={courseData.description} name='description' className='form-control'></textarea>
                                </div>

                                <div className='mb-3'>
                                    <label for='video' className='form-label'>Featured Image</label>
                                    <input type="file" id="file" onChange={handleFileChange} name='image' className='form-control'/>
                                    {courseData.prev_image &&
                                    <p className='mt-2'><img src={courseData.prev_image} width="300" alt=''/></p>
                                    }
                                </div>

                                <div className='mb-3'>
                                    <label for='tech' className='form-label'>Technologies</label>
                                    <textarea id="tech" onChange={handleChange} name='technologies' value={courseData.technologies} className='form-control' placeholder='Python, Php, HTML'></textarea>
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

export default EditCourse;