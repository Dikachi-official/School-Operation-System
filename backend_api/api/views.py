from django.shortcuts import render
from .serializers import *
from .models import *

# DRF IMPORTS
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

# Create your views here.
class CategoryList(generics.ListCreateAPIView):
    queryset = CourseCategory.objects.all()
    serializer_class = CategorySerializer
    #permission_classes = [permissions.IsAuthenticated]




##### COURSE VIEWS
class CourseList(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        if 'result' in self.request.GET:
            limit=int(self.request.GET['result'])
            qs = Course.objects.all().order_by('-id')[:limit]

        if 'category' in self.request.GET:
            category=self.request.GET['category']
            qs=Course.objects.filter(technologies__icontains=category)

        if 'skill_name' in self.request.GET and 'teacher' in self.request.GET:
            skill_name=self.request.GET['skill_name']
            teacher=self.request.GET['teacher']
            teacher=Teacher.objects.filter(id=teacher).first()
            qs=Course.objects.filter(technologies__icontains=skill_name,teacher=teacher)

        return qs
    
class CourseDetailView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    #permission_classes = [permissions.IsAuthenticated]
    



##### TEACHER COURSE VIEWS
# Specific Teacher Course(s)
class TeacherCourseList(generics.ListCreateAPIView):
    serializer_class = CourseSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=Teacher.objects.get(pk=teacher_id)
        return Course.objects.filter(teacher=teacher)
    
# Specific Teacher Course detail
class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CourseSerializer
    queryset = Course.objects.all()
    #permission_classes = [permissions.IsAuthenticated]




##### CHAPTER VIEW
class ChapterList(generics.ListCreateAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    #permission_classes = [permissions.IsAuthenticated]

class ChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    #permission_classes = [permissions.IsAuthenticated]




class CourseChapterList(generics.ListAPIView):
    serializer_class = ChapterSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = Course.objects.get(pk=course_id)
        return Chapter.objects.filter(course=course)

