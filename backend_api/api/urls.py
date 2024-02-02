from django.urls import path
from . import views

urlpatterns = [
    ### CATEGORY
    # All Category List
    path('category/', views.CategoryList.as_view()),

    ### COURSE
    # All courses List
    path('course/', views.CourseList.as_view()),
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
]
