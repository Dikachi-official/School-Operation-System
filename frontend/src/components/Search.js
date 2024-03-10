import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';


function Search() {
    const [courseData, setCourseData]=useState([]);
    const {searchString}=useParams()

    //Fetch courses after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/search-courses/'+searchString)
            .then((res)=>{
                setCourseData(res.data);

            });
        }catch(error){
            console.log(error);
        }



        // Course title on react page
        document.title='All Courses'
    }, []);


  return (
    <div className='container mt-3' >
        <h3>All courses</h3>
        {/*=== LATEST COURSES ===*/}
        <h3 className='pb-1 mb-4 mt-4 text-start'>Latest Courses  <Link to="" className="ml-7"></Link></h3>
        <div className='row p-2'>
            {courseData && courseData.map((course,index)=>
            <div className='col-md-3 p-2'>
                <div className="card">
                    <Link to={`/detail/${course.id}`}>
                        <img src={course.image} width="400" className="card-img-top" alt={course.title} />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title"><Link to='/detail/1'>{course.title}</Link></h5>
                        <p className="card-text">{course.description}</p>
                        <Link to={`/detail/${course.id}`} className="btn btn-primary">View</Link>
                    </div>
                </div>
            </div>
            )}
        </div>
        {/*=== END OF LATEST COURSES ===*/}
        {/*=== PAGINATION SECTION ===*/}
        <nav aria-label='Page navigation example mt-5'>
            <ul className='pagination justify-content-center'>
                <li className='page-item'><Link to="" className='page-link' >Previous</Link></li>
                <li className='page-item'><Link to="" className='page-link' >1</Link></li>
                <li className='page-item'><Link to="" className='page-link' >2</Link></li>
                <li className='page-item'><Link to="" className='page-link' >3</Link></li>
                <li className='page-item'><Link to="" className='page-link' >Next</Link></li>
            </ul>
        </nav>
        {/*=== END OF PAGINATION SECTION ===*/}
    </div>
  )
}

export default Search;