import React from 'react';
import { Link } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect } from 'react';



function TeacherDashboard() {
    useEffect(()=>{
        document.title='Teacher Dashboard'
    });


    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    Dashboard
                </section>
                <hr/>
            </div>
        </div>
    )
}

export default TeacherDashboard