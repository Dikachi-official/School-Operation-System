from rest_framework import serializers
from .models import *


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'full_name', 'bio', 'email', 'password', 'qualification','mobile_no', 'skills', 'teacher_courses', 'skill_list']
        depth = 1 # Relation between model and instance at 1 depth level