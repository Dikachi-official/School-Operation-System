import React from 'react';
import { Link } from 'react-router-dom'
import AllCourses from './AllCourses';
import { useEffect } from 'react';




function Home(){
    useEffect(()=>{
        document.title='Home Page'
    });

    return (
        <div className='container p-3'>
            {/*=== LATEST COURSES ===*/}
            <h3 className='pb-1 mb-4 mt-4 text-start'>Latest Courses  <Link to="/all-courses" className="ml-7">See All...</Link></h3>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="logo182.png" classname="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">Latest Courses</h5>
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
                            <h5 className="card-title">Latest Courses</h5>
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
                            <h5 className="card-title">Latest Courses</h5>
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
                            <h5 className="card-title">Latest Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*=== END OF LATEST COURSES ===*/}


            {/*=== POPULAR COURSES ===*/}
            <div className='p-0 d-flex w-100' >
                <h3 className='pb-1 mb-4 mt-5 justify-content-start w-auto'>Popular Courses</h3> <h3 className='pb-1 mb-4 mt-5 justify-content-end text-start'><Link to="" className='align-items-end justify-content-end ml-90 w-auto text-end'>See All...</Link></h3>
            </div>
            <div className='row p-2'>
                <div className='col-md-3 p-2'>
                    <div className="card">
                        <Link to="/popular-courses">
                            <img src="logo182.png" classname="card-img-top" alt="Course picture" />
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
                            <img src="logo182.png" classname="card-img-top" alt="Course picture" />
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
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
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
                            <img src="logo182.png" classname="card-img-top" alt="Course Picture" />
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
            <h3 className='pb-1 mb-4 mt-5 text-start'>Featured Teachers <Link to="">See All...</Link></h3>
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
    );
}

export default Home;
