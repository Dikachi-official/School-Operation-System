from rest_framework import serializers
from .models import *
from API.models import *



##### STUDENT SERIALIZER
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'full_name', 'username', 'email', 'password', 'mobile_no', 'interested_categories']
        #depth = 1 # Relation between model and instance at 1 depth level
        
        def __init__(self, *args, **kwargs):
            super(StudentSerializer, self).__init__(*args, **kwargs)
            request = self.context.get('request')
            self.Meta.depth = 0
            if request and request.method == 'GET':
                self.Meta.depth = 1





#### TEACHER SERIALIZER
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'full_name', 'profile_img', 'bio', 'email', 'password', 'qualification','mobile_no', 'skills', 'teacher_courses', 'skill_list']
        #depth = 1 # Relation between model and instance at 1 depth level

    '''
    USE THIS WHEN HAVING "FOREIGN KEY/ NESTED SERIALIZER" OBJECTS IN THE ABOVE MODEL
        INSTEAD OF "DEPTH" WHICH IS READONLY
    '''
    def __init__(self, *args, **kwargs):
        super(TeacherSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1


class TeacherDashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['total_teacher_courses','total_teacher_students', 'total_teacher_chapters']

    def __init__(self, *args, **kwargs):
        super(TeacherDashboardSerializer, self).__init__(*args, **kwargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 2