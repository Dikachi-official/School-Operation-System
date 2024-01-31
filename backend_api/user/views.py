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

##### STUDENT DATA  ##### STUDENT DATA
##### STUDENT DATA  ##### STUDENT DATA
class StudentList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    #permission_classes = [permissions.IsAuthenticated]

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    #permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
def student_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        studentData = Student.objects.get(email=email, password=password)
    except Student.models.DoesNotExist:
        studentData=None


    if studentData:
        return JsonResponse({'bool' : True, 'student_id':studentData.id})
    else:
        return JsonResponse({'bool' : False})
    






##### TEACHER DATA  ##### TEACHER DATA
##### TEACHER DATA  ##### TEACHER DATA
class TeacherList(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes = [permissions.IsAuthenticated]


class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes = [permissions.IsAuthenticated]


# Teacher Login func
@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    try:
        teacherData = Teacher.objects.get(email=email, password=password)
    except Teacher.models.DoesNotExist:
        teacherData=None


    if teacherData:
        return JsonResponse({'bool' : True, 'teacher_id':teacherData.id})
    else:
        return JsonResponse({'bool' : False})
    

# Teacher Change password Func
@csrf_exempt
def teacher_change_password(request, teacher_id):
    password=request.POST['password']
    try:
        teacherData = Teacher.objects.get(id=teacher_id)
    except Teacher.models.DoesNotExist:
        teacherData=None


    if teacherData:
        Teacher.objects.filter(id=teacher_id).update(password=password)
        return JsonResponse({'bool' : True})
    else:
        return JsonResponse({'bool' : False})
    

# Teacher Dashboard 
class TeacherDashboard(generics.RetrieveAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherDashboardSerializer
