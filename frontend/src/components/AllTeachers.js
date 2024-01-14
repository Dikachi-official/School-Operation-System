import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function AllTeachers() {
    const [teacher, setTeacher]=useState(null);

    useEffect(()=>{
        document.title='All Teachers'

        axios.get(baseUrl+'/teacher/').then((response)=>{
            setTeacher(response.data);
        });
    },[]);
    console.log(teacher);

  return (
    <div className='container mt-3' >
        <h3>All Teachers</h3>
        {/*=== LATEST COURSES ===*/}
        <h3 className='pb-1 mb-4 mt-4 text-start'>All Teachers <Link to="" className="ml-7">See All...</Link></h3>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Teacher picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/teacher-detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/teacher-detail/1">Teacher Name</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                                <span className='float-end'>Views: 78446</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=== END OF LATEST COURSES ===*/}
            {/*=== PAGINATION SECTION ===*/}
            <nav aria-label='Page navigation example mt-5'>
                <ul className='pagination justify-content-center'>
                    <li className='page-item'><a className='page-link' href='#'>Previous</a></li>
                    <li className='page-item'><a className='page-link' href='#'>1</a></li>
                    <li className='page-item'><a className='page-link' href='#'>2</a></li>
                    <li className='page-item'><a className='page-link' href='#'>3</a></li>
                    <li className='page-item'><a className='page-link' href='#'>Next</a></li>
                </ul>
            </nav>
            {/*=== END OF PAGINATION SECTION ===*/}
    </div>
  )
}

export default AllTeachers;