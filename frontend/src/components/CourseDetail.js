import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';


function CourseDetail() {
    let {course_id} = useParams();
    useEffect(()=>{
        document.title='Course Detail'
    });


  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src="" className="img-thumbnail" alt="..."/>
            </div>

            <div className='col-8'>
                <h3 className='text-start'>Course Title</h3>
                <p className='text-start'>If you are using the element to specify multiple elements for a specific, make sure to add the .img-* classes to the and not to the tag.</p>
                <p className='fw-bold text-start'>Course By: <Link to="/teacher-detail/1">Teacher 1</Link></p>
                <p className='fw-bold text-start'>Duration: 3 Hours 30 Minutes</p>
                <p className='fw-bold text-start'>Total Enrolled: 300 Students </p>
                <p className='fw-bold text-start'>Rating: 4.5/5</p>

            </div>
        </div>


        {/*=== COURSE VIDEOS ===*/}
        <div className='mt-4 mb-4' >
            <div className="card">
                <div className="card-header">
                    Course Videos
                </div>
                <ul className="list-group list-group-flush text-start">
                    <li className="list-group-item text-start">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes </span>
                            <button className='btn btn-sm btn-danger float-right' data-bs-toggle="modal" data-bs-target="#videoModal1">
                                <i class="bi bi-file-play-fill"></i>
                            </button>
                        </span>

                        {/*=== VIDEO MODAL ===== */}
                        <div className='modal fade' id='videoModal1' tableindex="-1" aria-labelledby='exampleModalLabel' aria-hidden="true">
                            <div className='modal-dialog modal-lg'>
                                <div className='modal-content'>
                                    <div className='modal-header'>
                                        <h5 className='modal-title' id='exampleModalLabel'>Video1</h5>
                                        <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label='Close'></button>
                                    </div>
                                    <div className='modal-body'>
                                        <div className='ratio ratio-16x9'>
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*==== MODAL END ==== */}
                    </li>

                    <li className="list-group-item text-start">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes </span>
                            <button className='btn btn-sm btn-danger float-right'>
                                <i class="bi bi-file-play-fill"></i>
                            </button>
                        </span>
                    </li>

                    <li className="list-group-item text-start">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes </span>
                            <button className='btn btn-sm btn-danger float-right'>
                                <i class="bi bi-file-play-fill"></i>
                            </button>
                        </span>
                    </li>

                    <li className="list-group-item text-start">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes </span>
                            <button className='btn btn-sm btn-danger float-right'>
                                <i class="bi bi-file-play-fill"></i>
                            </button>
                        </span>
                    </li>

                    <li className="list-group-item text-start">Introduction
                        <span className='float-end'>
                            <span className='me-5'>1 Hour 30 Minutes </span>
                            <button className='btn btn-sm btn-danger float-right'>
                                <i class="bi bi-file-play-fill"></i>
                            </button>
                        </span>
                    </li>
                </ul>
            </div>


            {/*=== RELATED COURSES ===*/}
            <h3 className='pb-1 mb-4 mt-5 text-start'>Related Courses <Link to="">See All...</Link></h3>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
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
                        <Link to="#">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Popular Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetail