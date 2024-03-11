import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';



function Navbar(){
    const [searchString, setsearchString]=useState({
        'search':''
    });


    // Change in Input
    const handleChange=(event)=>{
        setsearchString({
          ...searchString,
          [event.target.name]:event.target.value
        });
    }


    const studentLoginStatus=localStorage.getItem('studentLoginStatus')
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')

    const searchCourse = () => {
        if (searchString.search != ''){
            window.location.href='/search/'+searchString.search
        }
        console.log(searchString);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to="" className="navbar-brand">
                    Navbar
                    </Link>
                    <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/*=== SEACH BAR ====*/}
                    <form className='d-flex'>
                        <input name="search" onChange={handleChange} className='form-control me-2' type='search' placeholder='Search by course/technology' aria-label='Search'/>
                        <button onClick={searchCourse} className='btn btn-warning' type='button'>Search</button>
                    </form>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to="" className="nav-link active" aria-current="page" >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/all-courses" className="nav-link" >
                                    Courses
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to=""
                                    className="nav-link dropdown-toggle"
                                    
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Teacher
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    {teacherLoginStatus!=='true' &&
                                        <>
                                        <li>
                                            <Link to="/teacher-register" className="dropdown-item" >
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/teacher-login" className="dropdown-item" >
                                                Login
                                            </Link>
                                        </li>
                                        </>
                                    }
                                    <li>
                                        <Link to="/teacher-dashboard" className="dropdown-item" >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/teacher-logout" className="dropdown-item" >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to=""
                                    className="nav-link dropdown-toggle"
                                    
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Student
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    {studentLoginStatus!=='true' &&
                                        <>
                                        <li>
                                            <Link to="/user-register" className="dropdown-item" >
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/student-login" className="dropdown-item" >
                                                Login
                                            </Link>
                                        </li>
                                        </>
                                    }
                                    <li>
                                        <Link to="/user-dashboard" className="dropdown-item" >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/student-logout" className="dropdown-item" >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link" >
                                    About
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;