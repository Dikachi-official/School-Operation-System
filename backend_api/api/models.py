from django.db import models
from user.models import Teacher, Student


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
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='course_images', null=True)
    technologies = models.TextField(default="Science & technology")

    def __str__(self):
        return self.title
    


# Chapter Model
class Chapter(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    video = models.FileField(upload_to='chapter_videos', null=True)
    remarks = models.TextField(null=True)

    def __str__(self):
        return self.title