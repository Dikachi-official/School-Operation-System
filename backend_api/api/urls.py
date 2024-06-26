from django.urls import path
from . import views

urlpatterns = [
    ### CATEGORY
    # All Category List
    path('category/', views.CategoryList.as_view()),

    ### COURSE
    # All courses List
    path('course/', views.CourseList.as_view()),
    # Popular courses based on rating
    path('popular-courses/', views.CourseRatingList.as_view()),
    # Search Course
    path('search-courses/<str:searchstring>', views.CourseList.as_view()),
    # Course Detail
    path('course/<int:pk>', views.CourseDetailView.as_view()),
    # Course rating by students
    path('course-rating/', views.CourseRatingList.as_view()),




    ### TEACHER  COURSE
    # Specific teacher course list
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),
    # Specific teacher course detail
    path('teacher-course-detail/<int:pk>', views.TeacherCourseDetail.as_view()),




    #### CHAPTER  #### CHAPTER
    #### CHAPTER  #### CHAPTER
    # All Chapters
    path('chapter/', views.ChapterList.as_view()),
    
    # Specific Chapters
    path('chapter/<int:pk>', views.ChapterDetailView.as_view()),
    
    # Specific course Chapter
    path('course-chapter/<int:course_id>', views.CourseChapterList.as_view()),



    ### STUDENT ENROLLED COURSE
    ### STUDENT ENROLLED COURSE
    path('student-enroll-course/', views.StudentEnrollCourseList.as_view()),
    
    # get status of enrolled students
    path('fetch-enroll-status/<int:student_id>/<int:course_id>', views.fetch_enroll_status),
    
    # get list of enrolled students per course in "teacher-course page"
    path('fetch-enrolled-students/<int:course_id>', views.EnrolledStudentsList.as_view()),
    
    # get rating status of enrolled students
    path('fetch-rating-status/<int:student_id>/<int:course_id>', views.fetch_rating_status),
    
    # get list of enrolled students in "my-student page"
    path('fetch-all-enrolled-students/<int:teacher_id>', views.EnrolledStudentsList.as_view()),
    
    # get list of enrolled courses per student in "student-course page"
    path('fetch-enrolled-courses/<int:student_id>/', views.EnrolledStudentsList.as_view()),
    
    # get list of recommended courses per student in "student-course page"
    path('fetch-recommended-courses/<int:studentId>/', views.CourseList.as_view()),

    #To add as Favorite Course
    path('student-add-favorite-course/', views.StudentFavoriteCourseList.as_view()),
    path('student-remove-favorite-course/<int:course_id>/<int:student_id>', views.remove_favorite_course),
    path('fetch-favorite-status/<int:student_id>/<int:course_id>', views.fetch_favorite_status),

        # get list of favorite courses per student in "student-course page"
    path('fetch-favorite-courses/<int:student_id>/', views.StudentFavoriteCourseList.as_view()),



    # STUDENT ASSIGNMENT(TEACHER DASHBOARD)
    path('student-assignment/<int:teacher_id>/<int:student_id>/', views.AssignmentList.as_view()),

    # STUDENT ASSIGNMENT(STUDENT DASHBOARD)
    path('my-assignments/<int:student_id>/', views.MyAssignmentList.as_view()),

    # STUDENT UPDATE ASSIGNMENT(STUDENT DASHBOARD)
    path('update-assignment/<int:pk>', views.UpdateAssignment.as_view()),



    # NOTIFICATION URL    # NOTIFICATION URL
    path('student/fetch-all-notifications/<int:student_id>/', views.NotificationList.as_view()),
    # Save Notification
    path('save-notification/', views.NotificationList.as_view()),



    # QUIZ URL    # QUIZ URL
    path('quiz/', views.QuizList.as_view()),
    path('teacher-quiz/<int:teacher_id>/', views.TeacherQuizList.as_view()),
    # Specific teacher quiz detail
    path('teacher-quiz-detail/<int:pk>', views.TeacherQuizDetail.as_view()),
    # Specific Quiz
    path('quiz/<int:pk>', views.QuizDetailView.as_view()),
    # Specific Quiz Question
    path('quiz-questions/<int:quiz_id>/', views.QuizQuestionList.as_view()),
    path('quiz-questions/<int:quiz_id>/<int:limit>/', views.QuizQuestionList.as_view()),
    # Child component url for "quiz-assign-course/" url Component
    path('fetch-quiz-assign-status/<int:quiz_id>/<int:course_id>/', views.fetch_quiz_assign_status),
    # To assign specifc quiz to its respective course
    path('quiz-assign-course/', views.CourseQuizList.as_view()),
    # To fetch assigned course quiz by course id 
    path('fetch-assigned-quiz/<int:course_id>/', views.CourseQuizList.as_view()),
    # To get attempt quiz questions
    path('attempt-quiz/', views.AttemptQuizList.as_view()),

    path('quiz-questions/<int:quiz_id>/next-question/<int:question_id>', views.QuizQuestionList.as_view()),

    path('fetch-quiz-attempt-status/<int:quiz_id>/<int:student_id>/', views.fetch_quiz_attempt_status),




    # STUDY MATERIALS 
    path('study-materials/<int:course_id>', views.StudyMaterialList.as_view()),
    # STUDY MATERIAL DETAIL VIEW
    path('study-material/<int:pk>', views.StudyMaterialDetailView.as_view()),
    
    path('user/study-material/<int:course_id>', views.StudyMaterialList.as_view()),
    # ATTEMPTED QUIZ
    path('attempted-quiz/<int:quiz_id>', views.AttemptQuizList.as_view()),
    # QUIZ RESULT
    path('fetch-quiz-result/<int:quiz_id>/<int:student_id>', views.fetch_quiz_attempt_status),
]
