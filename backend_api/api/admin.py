from django.contrib import admin
from .models import CourseCategory, Course, Chapter, StudentCourseEnrollment, StudentFavoriteCourse, CourseRating

# Register your models here.
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Chapter)
admin.site.register(StudentCourseEnrollment)
admin.site.register(CourseRating)
admin.site.register(StudentFavoriteCourse)
