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
    
    def total_enrolled_students(self):
        total_enrolled_students=StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enrolled_students
    
    def course_rating(self):
        course_rating=CourseRating.objects.filter(course=self).aggregate(avg_rating=models.Avg('rating'))  # To auto calc tha rating
        return course_rating['avg_rating']
    


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
    



# STUDENT FAVORITE COURSE
class StudentFavoriteCourse(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Student Favorite Course"

    def __str__(self):
        return f"{self.course}-{self.student}"
    



# COURSE RATING AND REVIEWS
class CourseRating(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    rating = models.PositiveBigIntegerField(default=0)
    reviews = models.TextField(null=True)
    review_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.course} - {self.student} - {self.rating}"
    


# STUDENT ASSIGNMENT
class StudentAssignment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"
    
    











       
