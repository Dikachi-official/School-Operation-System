from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCategory
        fields = ['id', 'title', 'description']



class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'category', 'teacher', 'title', 'description', 'image', 'technologies', 'course_chapters', 'related_videos', 'tech_list']
        depth = 1
        


class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ['id', 'title', 'description', 'video', 'remarks']
        