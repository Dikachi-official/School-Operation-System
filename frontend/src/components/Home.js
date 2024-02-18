import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';




const baseUrl='http://127.0.0.1:8000/api';


function Home(){
    const [courseData, setCourseData]=useState([]);

    //Fetch courses after page refresh
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/course/?result=4')
            .then((res)=>{
                setCourseData(res.data);

            });
        }catch(error){
            console.log(error);
        }



        // Course title on react page
        document.title='Home'
    }, []);

    return (
        <>
        {/*== LANDING PAGE ==*/}
        <div className='bg-black w-100 p-10 m-20'>
            <h2 className='fc-white'>Welcome </h2>
            <p>
                This is our school site, We are pleased to release this version to you
            </p>
        </div>
        {/*== END OF LANDING PAGE ==*/}
        <div className='bg-black'></div>
        <div className='container p-3'>
            
            {/*=== LATEST COURSES ===*/}
            <h3 className='pb-1 mb-4 mt-4 text-start'>Latest Courses  <Link to="/all-courses" className="ml-7">See All...</Link></h3>
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


            {/*=== POPULAR COURSES ===*/}
            <div className='p-0 d-flex w-100' >
                <h3 className='pb-1 mb-4 mt-5 justify-content-start w-auto'>Popular Courses</h3> <h3 className='pb-1 mb-4 mt-5 justify-content-end text-start'><Link to="/popular-courses" className='align-items-end justify-content-end ml-90 w-auto text-end'>See All...</Link></h3>
            </div>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/popular-courses">
                            <img src="logo182.png" classname="card-img-top" alt="Course img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Popular Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/popular-courses" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/popular-courses">
                            <img src="logo182.png" classname="card-img-top" alt="Course img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Popular Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/popular-courses" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/popular-courses">
                            <img src="logo182.png" classname="card-img-top" alt="Course img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Popular Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/popular-courses">
                            <img src="logo182.png" classname="card-img-top" alt="Course img" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Popular Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/popular-courses" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*=== END OF POPULAR COURSES ===*/}


            {/*=== FEATURED TEACHERS ===*/}
            <h3 className='pb-1 mb-4 mt-5 text-start'>All Lecturers <Link to="/all-teachers">See All...</Link></h3>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Featured Teachers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Featured Teachers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Featured Teachers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Featured Teachers</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*=== END OF FEATURED TEACHERS ===*/}


            {/*=== STUDENT TESTIMONIAL ===*/}
            <div className="pb-1 mt-2 mb-2">
                <h3>Student Testimonial</h3>
                <div>
                    <div
                    id="carouselExampleIndicators"
                    className="carousel slide bg-dark text-white py-5"
                    data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                            />
                            <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                            />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                
                                <figure className="text-center">
                                    <img src="..." className="d-block w-50" alt="..." />
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="carousel-item">
                                
                                <figure className="text-center">
                                    <img src="..." className="d-block w-50" alt="..." />
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-50" alt="..." />
                                <figure className="text-center">
                                    <img src="..." className="d-block w-100" alt="..." />
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
            </div>
            {/*=== END OF STUDENT TESTIMONIAL ===*/}
        </div>
        </>
    );
}

export default Home;
