from django.contrib import admin
from .models import CourseCategory, Course, Chapter, StudentCourseEnrollment, StudentFavoriteCourse, CourseRating, StudentAssignment, Notification, Quiz, QuizQuestions, CourseQuiz

# Register your models here.
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Chapter)
admin.site.register(StudentCourseEnrollment)
admin.site.register(CourseRating)
admin.site.register(StudentFavoriteCourse)
admin.site.register(StudentAssignment)


class NotificationAdmin(admin.ModelAdmin):
    list_display=['id','notif_subject', 'notif_for', 'notif_read_status']
admin.site.register(Notification, NotificationAdmin)

admin.site.register(Quiz)
admin.site.register(QuizQuestions)
admin.site.register(CourseQuiz)