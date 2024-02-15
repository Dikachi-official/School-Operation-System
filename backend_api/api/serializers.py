from rest_framework import serializers
from .models import *

# CATEGORY SERIALIZER
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id', 'title', 'description']


# COURSE SERIALIZER
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
        

# COURSE CHAPTERVSERIALIZER
class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ['id', 'title', 'description', 'video', 'remarks']
    
    def __init__(self, *args, **kwargs):
        super(ChapterSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1



# STUDENT COURSE ENROLLMENT SERIALIZER
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





# STUDENT FAVORIE COURSE SERIALIZER
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



# COURSE RATING SERIALIZER
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

# STUDENT ASSIGNMENT SERIALIZER
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






# NOTIFICATION SERIALIZER
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'teacher', 'student', 'notif_subject', 'notif_for', 'notif_read_status']
    




#### QUIZ SERIALIZER
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id','title', 'assign_status', 'detail', 'teacher', 'add_time']
    
    '''
    USE THIS WHEN HAVING "FOREIGN KEY" OBJECTS IN THE ABOVE MODEL
        INSTEAD OF "DEPTH" WHICH IS READONLY
    '''
    def __init__(self, *args, **kwargs):
        super(QuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2

# QUESTION SERIALIZER
class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizQuestions
        fields = ['id', 'quiz', 'questions', 'ans1', 'ans2','ans3', 'ans4', 'right_ans']
    
    def __init__(self, *args, **kwargs):
        super(QuestionSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1


# COURSE QUIZ SERIALIZER
class CourseQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseQuiz
        fields = ['id', 'course', 'quiz', 'teacher']
        #depth = 1
    def __init__(self, *args, **kwargs):
        super(CourseQuizSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2