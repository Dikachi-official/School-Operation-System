import React from 'react';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// OTHER ROTES/COMPONENTS
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import CourseDetail from './CourseDetail';

// LIST PAGES ROUTE
import AllCourses from './AllCourses';


// USER ROUTE
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import FavoriteCourses from './User/FavouriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';


// TEACHER ROUTE
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherCourses from './Teacher/TeacherCourses';
import AddCourses from './Teacher/AddCourses';
import MyStudents from './Teacher/MyStudents';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import TeacherDetail from './Teacher/TeacherDetail';


//OTHER ROUTES
import PopularCourses from './PopularCourses';
import CategoryCourses from './CategoryCourses';
import AllTeachers from './AllTeachers';






function Main(){
    return (
        <div className='App'>
            <Router>
                <Navbar/>
                <Switch>
                    {/* === USER ROUTE ==== */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/detail/:course_id" component={CourseDetail} />
                    <Route path="/user-login" component={Login} />
                    <Route path="/user-register" component={Register} />
                    <Route path="/user-dashboard" component={Dashboard} />
                    <Route path="/my-courses" component={MyCourses} />
                    <Route path="/favorite-courses" component={FavoriteCourses} />
                    <Route path="/recommended-courses" component={RecommendedCourses} />
                    <Route path="/profile-setting" component={ProfileSetting} />
                    <Route path="/change-password" component={ChangePassword} />


                    {/* === TEACHER ROUTE ==== */}
                    <Route path="/teacher-login" component={TeacherLogin} />
                    <Route path="/teacher-logout" component={TeacherLogout} />
                    <Route path="/teacher-register" component={TeacherRegister} />
                    <Route path="/teacher-dashboard" component={TeacherDashboard} />
                    <Route path="/teacher-courses" component={TeacherCourses} />
                    <Route path="/add-courses" component={AddCourses} />
                    <Route path="/my-students" component={MyStudents} />
                    <Route path="/teacher-profile-setting" component={TeacherProfileSetting} />
                    <Route path="/teacher-change-password" component={TeacherChangePassword} />
                    <Route path="/teacher-detail/:teacher_id" component={TeacherDetail} />


                    {/*=== OTHER ROUTES === */}
                    <Route path="/all-courses" component={AllCourses} />
                    <Route path="/popular-courses" component={PopularCourses} />
                    <Route path="/all-teachers" component={AllTeachers} />
                    <Route path="/category/:category_slug" component={CategoryCourses} />
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default Main;