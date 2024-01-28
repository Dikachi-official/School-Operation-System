from django.db import models
from user.models import Teacher, Student
# Use alias "serial" instead to serialize model instance
from django.core import serializers as serial


# Create your models here.

# Course Category Model
class CourseCategory(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    
    class Meta:
        verbose_name_plural = "Course Categories"

    def __str__(self):
        return self.title



# Course Model
class Course(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_courses')
    image = models.ImageField(upload_to='course_images', null=True)
    technologies = models.TextField(default="Science & technology")

    def __str__(self):
        return self.title
    
    def related_videos(self):
        related_videos = Course.objects.filter(technologies__icontains=self.technologies)
        return serial.serialize('json',related_videos)
    
    def tech_list(self):
        tech_list=self.technologies.split(",")
        return tech_list
    


# Chapter Model
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_chapters')
    title = models.CharField(max_length=200)
    description = models.TextField()
    video = models.FileField(upload_to='chapter_videos', null=True)
    remarks = models.TextField(null=True)

    def __str__(self):
        return self.title



class StudentCourseEnrollment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolled_courses')
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrolled_students')
    enrolled_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Student Course Enrollment'


    def __str__(self):
        return f"{self.course.title} - {self.student}"