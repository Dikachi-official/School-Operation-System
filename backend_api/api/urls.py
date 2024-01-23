from django.urls import path
from . import views

urlpatterns = [
    # All Category List
    path('category/', views.CategoryList.as_view()),

    # All courses List
    path('course/', views.CourseList.as_view()),

    # Specific teacher course list
    path('teacher-courses/<int:teacher_id>', views.TeacherCourseList.as_view()),

    # All Chapters
    path('chapter/', views.ChapterList.as_view()),

    # Specific Chapters
    path('chapter/<int:pk>', views.ChapterDetailView.as_view()),

    # Specific course Chapter
    path('course-chapter/<int:course_id>', views.CourseChapterList.as_view()),
]