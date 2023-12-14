import React from 'react'



function TeacherLogout() {
    // Remove Login status, if user Logs out and redirect to login page
    localStorage.removeItem('teacherLoginStatus')
    window.location.href='/teacher-login'


    return (
        <div></div>
    )
}

export default TeacherLogout;