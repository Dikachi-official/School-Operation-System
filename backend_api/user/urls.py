from django.urls import path
from . import views

urlpatterns = [
    #### STUDENT
    path('students/', views.StudentList.as_view()),
    path('student/<int:pk>/', views.StudentDetail.as_view()),
    path('student-login/', views.student_login, name='teacher-login'),
    # Student Dashboard
    path('student/dashboard/<int:pk>', views.StudentDashboard.as_view()),



    #### TEACHER
    path('teachers/', views.TeacherList.as_view()),
    path('teacher/<int:pk>/', views.TeacherDetail.as_view()),
    # Teacher change password
    path('teacher/change-password/<int:teacher_id>/', views.teacher_change_password),
    # Teacher Login
    path('teacher-login/', views.teacher_login, name='teacher-login'),
    # Teacher Dashboard
    path('teacher/dashboard/<int:pk>', views.TeacherDashboard.as_view()),
]