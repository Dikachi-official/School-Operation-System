import React from 'react';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

// NAVBAR ROuTES
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';

// LIST PAGES ROUTE
import AllCourses from './AllCourses';
import CourseDetail from './CourseDetail';


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
import AddChapter from './Teacher/AddChapter';
import CourseChapters from './Teacher/CourseChapters';
import AllChapters from './Teacher/AllChapters';
import EditChapter from './Teacher/EditChapter';


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
                    <Route path="/add-chapter/:course_id" component={AddChapter} />
                    <Route path="/all-chapters" component={AllChapters} />
                    <Route path="/edit-chapter/:chapter_id" component={EditChapter} />
                    <Route path="/course-chapters/:course_id" component={CourseChapters} />



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