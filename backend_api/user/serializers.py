from rest_framework import serializers
from .models import *



##### STUDENT SERIALIZER
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'full_name', 'username', 'email', 'password', 'mobile_no', 'interested_categories']
        depth = 1 # Relation between model and instance at 1 depth level





#### TEACHER SERIALIZER
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'full_name', 'bio', 'email', 'password', 'qualification','mobile_no', 'skills', 'teacher_courses', 'skill_list']
        depth = 1 # Relation between model and instance at 1 depth level