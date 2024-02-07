from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id', 'title', 'description']



class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'category', 'teacher', 'title', 'description', 'image', 'technologies', 'course_chapters', 'related_videos', 'tech_list','total_enrolled_students', 'course_rating']
    
    '''
    USE THIS WHEN HAVING "FOREIGN KEY" OBJECTS IN THE ABOVE MODEL
        INSTEAD OF "DEPTH" WHICH IS READONLY
    '''
    def __init__(self, *args, **kwargs):
        super(CourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2
        


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ['id', 'title', 'description', 'video', 'remarks']
    
    def __init__(self, *args, **kwargs):
        super(StudentCourseEnrollSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1



class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentCourseEnrollment
        fields = ['id', 'course', 'student', 'enrolled_time']
        #depth = 1
    def __init__(self, *args, **kwargs):
        super(StudentCourseEnrollSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2






class StudentFavoriteCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentFavoriteCourse
        fields = ['id', 'course', 'student', 'status']
    def __init__(self, *args, **kwargs):
        super(StudentFavoriteCourseSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2




class CourseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseRating
        fields = ['id', 'course', 'student', 'rating', 'reviews', 'review_time']
    
    '''
    USE THIS WHEN HAVING "FOREIGN KEY" OBJECTS IN THE ABOVE MODEL
        INSTEAD OF "DEPTH" WHICH IS READONLY
    '''
    def __init__(self, *args, **kwargs):
        super(CourseRatingSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1


class StudentAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentAssignment
        fields = ['id', 'student', 'title', 'detail', 'student_status', 'teacher', 'add_time']
    
    '''
    USE THIS WHEN HAVING "FOREIGN KEY" OBJECTS IN THE ABOVE MODEL
        INSTEAD OF "DEPTH" WHICH IS READONLY
    '''
    def __init__(self, *args, **kwargs):
        super(StudentAssignmentSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2