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


    ### TEACHER
    # Specific teacher course list
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),
    # Specific teacher course detail
    path('teacher-course-detail/<int:pk>', views.TeacherCourseDetail.as_view()),


    #### CHAPTER
    # All Chapters
    path('chapter/', views.ChapterList.as_view()),
    # Specific Chapters
    path('chapter/<int:pk>', views.ChapterDetailView.as_view()),
    # Specific course Chapter
    path('course-chapter/<int:course_id>', views.CourseChapterList.as_view()),
]