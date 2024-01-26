import React from 'react'



function StudentLogout() {
    // Remove Login status, if user Logs out and redirect to login page
    localStorage.removeItem('studentLoginStatus')
    window.location.href='/student-login'


    return (
        <div></div>
    )
}

export default StudentLogout;