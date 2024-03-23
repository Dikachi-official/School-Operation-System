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
import StudentLogout from './User/StudentLogout';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourses from './User/MyCourses';
import StudentAssignments from './User/StudentAssignments';
import FavoriteCourses from './User/FavouriteCourses';
import RecommendedCourses from './User/RecommendedCourses';
import ProfileSetting from './User/ProfileSetting';
import StudentChangePassword from './User/StudentChangePassword';


// TEACHER ROUTE
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import TeacherCourses from './Teacher/TeacherCourses';
import AddCourses from './Teacher/AddCourses';
import EditCourse from './Teacher/EditCourse';
import MyStudents from './Teacher/MyStudents';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';
import TeacherDetail from './Teacher/TeacherDetail';
import AddChapter from './Teacher/AddChapter';
import CourseChapters from './Teacher/CourseChapters';
import AllChapters from './Teacher/AllChapters';
import EditChapter from './Teacher/EditChapter';
import TeacherSkillCourses from './Teacher/TeacherSkillCourses';
import AddAssignment from './Teacher/AddAssignment';
import StudyMaterials from './Teacher/StudyMaterials';
import AddStudyMaterial from './Teacher/AddStudyMaterial';





//TEACHER DASHBOARD : QUIZ ROUTE
import AllQuiz from './Teacher/AllQuiz';
import AddQuiz from './Teacher/AddQuiz';
import EditQuiz from './Teacher/EditQuiz';
import QuizQuestions from './Teacher/QuizQuestions';
import AddQuizQuestion from './Teacher/AddQuizQuestion';
import AssignQuiz from './Teacher/AssignQuiz';





//STUDENT DASHBOARD : QUIZ ROUTE
import CourseQuizList from './User/CourseQuizList';
import TakeQuiz from './User/TakeQuiz';





//OTHER ROUTES
import PopularCourses from './PopularCourses';
import CategoryCourses from './CategoryCourses';
import AllTeachers from './AllTeachers';
import EnrolledStudents from './EnrolledStudents';
import ShowAssignment from './Teacher/ShowAssignment';
import Search from './Search';








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
                    <Route path="/student-login" component={Login} />
                    <Route path="/student-logout" component={StudentLogout} />
                    <Route path="/user-register" component={Register} />
                    <Route path="/user-dashboard" component={Dashboard} />
                    <Route path="/my-courses" component={MyCourses} />
                    <Route path="/my-assignments/" component={StudentAssignments} />
                    <Route path="/favorite-courses" component={FavoriteCourses} />
                    <Route path="/recommended-courses" component={RecommendedCourses} />
                    <Route path="/profile-setting" component={ProfileSetting} />
                    <Route path="/student-change-password" component={StudentChangePassword} />



                    {/* === TEACHER ROUTE ==== */}
                    <Route path="/teacher-login" component={TeacherLogin} />
                    <Route path="/teacher-logout" component={TeacherLogout} />
                    <Route path="/teacher-register" component={TeacherRegister} />
                    <Route path="/teacher-dashboard" component={TeacherDashboard} />
                    <Route path="/teacher-courses" component={TeacherCourses} />
                    <Route path="/add-courses" component={AddCourses} />
                    <Route path="/edit-course/:course_id" component={EditCourse} />
                    <Route path="/my-students" component={MyStudents} />
                    <Route path="/add-assignment/:student_id/:teacher_id" component={AddAssignment} />
                    <Route path="/show-assignment/:student_id/:teacher_id" component={ShowAssignment} />
                    <Route path="/teacher-profile-setting" component={TeacherProfileSetting} />
                    <Route path="/teacher-change-password" component={TeacherChangePassword} />
                    <Route path="/teacher-detail/:teacher_id" component={TeacherDetail} />
                    <Route path="/add-chapter/:course_id" component={AddChapter} />
                    <Route path="/all-chapters" component={AllChapters} />
                    <Route path="/edit-chapter/:chapter_id" component={EditChapter} />
                    <Route path="/course-chapters/:course_id" component={CourseChapters} />
                    <Route path="/teacher-skill-courses/:skill_name/:teacher_id" component={TeacherSkillCourses} />




                    {/*=== TEACHER DASHBOARD : QUIZ ROUTE ===*/}
                    <Route path="/quiz" component={AllQuiz} /> 
                    <Route path="/add-quiz" component={AddQuiz} />       
                    <Route path="/edit-quiz/:quiz_id" component={EditQuiz} /> 
                    <Route path="/all-questions/:quiz_id" component={QuizQuestions} />     
                    <Route path="/add-quiz-question/:quiz_id" component={AddQuizQuestion} />
                    <Route path="/assign-quiz/:course_id" component={AssignQuiz} />




                    {/*=== STUDENT DASHBOARD : QUIZ ROUTE ===*/}
                    <Route path="/course-quiz/:course_id" component={CourseQuizList} />
                    <Route path="/take-quiz/:quiz_id" component={TakeQuiz} />




                    {/*=== STUDY MATERIALS ===*/}
                    <Route path="/study-materials/:course_id" component={StudyMaterials} />
                    <Route path="/add-study/:course_id" component={AddStudyMaterial} />
                    {/*<Route path="/edit-study/:study_id" component={EditChapter} />*/}





                    {/*=== OTHER ROUTES === */}
                    <Route path="/enrolled-students/:course_id" component={EnrolledStudents} />
                    <Route path="/all-courses" component={AllCourses} />
                    <Route path="/search/:searchstring" component={Search} />
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