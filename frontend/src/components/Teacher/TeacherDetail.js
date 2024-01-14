import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';


function TeacherDetail() {
    useEffect(()=>{
        document.title='Teacher Detail'
    });


  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src="" className="img-thumbnail" alt="Teacher image"/>
            </div>

            <div className='col-8'>
                <h3 className='text-start'>Prof Ovat</h3>
                <p className='text-start'>If you are using the element to specify multiple elements for a specific, make sure to add the .img-* classes to the and not to the tag.</p>
                <p className='fw-bold text-start'>
                    Skills: <Link to="/category/thermodynamics">Thermodynamics</Link>, <Link to="/category/metallurgy">Metallurgy</Link>, <Link to="/category/material-science">Material science</Link>
                </p>


            </div>
        </div>


        {/*=== COURSE LIST ===*/}
        <div className='mt-4 mb-4' >
            <div className="card">
                <h5 className="card-header">
                    Course List
                </h5>
                <div className="list-group list-group-flush text-start">
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Thermodynamics</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Material Science</Link>
                    <Link to="/detail/1" className='list-group-item list-group-item-action'>Metallurgy</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherDetail