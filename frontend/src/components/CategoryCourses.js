import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function CategoryCourses() {
    useEffect(()=>{
        document.title='Category Courses'
    });

  return (
    <div className='container mt-3' >
        <h3>All courses</h3>
        {/*=== LATEST COURSES ===*/}
        <h3 className='pb-1 mb-4 mt-4 text-start'>Mechanical Courses  <Link to="" className="ml-7">See All...</Link></h3>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="detail/1">Course Title</Link></h5>
                        </div>
                    </div>
                </div>

                
            </div>
            {/*=== END OF LATEST COURSES ===*/}
    </div>
  )
}

export default CategoryCourses;