from django.shortcuts import render
from .serializers import *
from .models import *
from django.db.models import Q
from user.models import * 

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

        if 'searchstring' in self.kwargs:
            search=self.kwargs['searchstring']
            if search:
                qs=Course.objects.filter(Q(title__icontains=search)|Q(technologies__icontains=search))

        # Recommended Courses
        elif 'studentId' in self.kwargs:
            student_id = self.kwargs['studentId']
            student = Student.objects.get(pk=student_id)
            print(student.interested_categories)
            queries = [Q(technologies__iendswith=value) for value in student.interested_categories]
            query = queries.pop()
            for item in queries:
                query |= item
            qs = Course.objects.filter(query)
            return qs

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




##### COURSE CHAPTER
class CourseChapterList(generics.ListAPIView):
    serializer_class = ChapterSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = Course.objects.get(pk=course_id)
        return Chapter.objects.filter(course=course)
    




##### STUDENT COURSE VIEW
class StudentEnrollCourseList(generics.ListCreateAPIView):
    queryset = StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    #permission_classes = [permissions.IsAuthenticated]


@csrf_exempt
def fetch_enroll_status(request, student_id, course_id):
    student = Student.objects.filter(id=student_id).first()
    course = Course.objects.filter(id=course_id).first()
    enrolled_status = StudentCourseEnrollment.objects.filter(course=course, student=student).count()

    if enrolled_status:
        return JsonResponse({'bool' : True})
    else:
        return JsonResponse({'bool' : False})
    

# Get list of enrolled students in a course
class EnrolledStudentsList(generics.ListAPIView):
    queryset = StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id = self.kwargs['course_id']
            course = Course.objects.get(pk=course_id)
            return StudentCourseEnrollment.objects.filter(course=course)
        elif 'teacher_id' in self.kwargs:
            teacher_id = self.kwargs['teacher_id']
            teacher = Teacher.objects.get(pk=teacher_id)
            return StudentCourseEnrollment.objects.filter(course__teacher=teacher).distinct() # at postgress deploy use ".distinct('id)"
       
        # get list of enrolled courses per student in "student-course page -My courses"
        elif 'student_id' in self.kwargs:
            student_id = self.kwargs['student_id']
            student = Student.objects.get(pk=student_id)
            return StudentCourseEnrollment.objects.filter(student = student).distinct()



##### COURSE RATING VIEW
class CourseRatingList(generics.ListCreateAPIView):
    queryset = CourseRating.objects.all()
    serializer_class = CourseRatingSerializer
    #permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        if 'popular' in self.request.GET:
            sql = "SELECT *,AVG(cr.rating) as avg_rating FROM api_courserating as cr INNER JOIN main_course as c ON cr.course_id=c, id GROUP BY c.id ORDER BY avg_ratingdesc LIMIT 4"
            return CourseRating.objects.raw(sql)
        if 'all' in self.request.GET:
            sql = "SELECT *,AVG(cr.rating) as avg_rating FROM api_courserating as cr INNER JOIN main_course as c ON cr.course_id=c, id GROUP BY c.id ORDER BY avg_ratingdesc"
            return CourseRating.objects.raw(sql)
            



### FETCH RATING STATUS OF ENROLLED STUDENTS
@csrf_exempt
def fetch_rating_status(request, student_id, course_id):
    student = Student.objects.filter(id=student_id).first()
    course = Course.objects.filter(id=course_id).first()
    rating_status = CourseRating.objects.filter(course=course, student=student).count()

    if rating_status:
        return JsonResponse({'bool' : True})
    else:
        return JsonResponse({'bool' : False})
    




### ADD/REMOVE STUDENT FAVORITE COURSE
class StudentFavoriteCourseList(generics.ListCreateAPIView):
    queryset = StudentFavoriteCourse.objects.all()
    serializer_class = StudentFavoriteCourseSerializer

    def get_queryset(self):

        # get list of enrolled courses per student in "student-course page -My courses"
        if 'student_id' in self.kwargs:
            student_id = self.kwargs['student_id']
            student = Student.objects.get(pk=student_id)
            return StudentFavoriteCourse.objects.filter(student = student).distinct()

def fetch_favorite_status(request,student_id,course_id):
    student = Student.objects.filter(id=student_id).first()
    course = Course.objects.filter(id=course_id).first()
    favoriteStatus = StudentFavoriteCourse.objects.filter(course=course, student=student).first()
    if favoriteStatus and favoriteStatus.status == True:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})

def remove_favorite_course(request, course_id, student_id):
    student = Student.objects.filter(id=student_id).first()
    course = Course.objects.filter(id=course_id).first()
    favoriteStatus = StudentFavoriteCourse.objects.filter(course=course, student=student).delete()
    if favoriteStatus:
        return JsonResponse({'bool': True})
    else:
        return JsonResponse({'bool': False})
    


# Fetch all assignments related to a student
class AssignmentList(generics.ListCreateAPIView):
    queryset = StudentAssignment.objects.all()
    serializer_class = StudentAssignmentSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        teacher_id = self.kwargs['teacher_id']
        student = Student.objects.get(pk=student_id)
        teacher = Teacher.objects.get(pk=teacher_id)
        return StudentAssignment.objects.filter(student=student, teacher=teacher)
    


# Fetch all assignments related to a student
class MyAssignmentList(generics.ListCreateAPIView):
    queryset = StudentAssignment.objects.all()
    serializer_class = StudentAssignmentSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        student = Student.objects.get(pk=student_id)
        # Update Notification
        Notification.objects.filter(student=student, notif_for='student', notif_subject='assignment').update(notif_read_status=True)
        return StudentAssignment.objects.filter(student=student)
    

# Fetch update all assignments related to a student
class UpdateAssignment(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudentAssignment.objects.all()
    serializer_class = StudentAssignmentSerializer
    #permission_classes = [permissions.IsAuthenticated]







# NOTIFICATION VIEWS
# NOTIFICATION VIEWS
# NOTIFICATION VIEWS
class NotificationList(generics.ListCreateAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        student = Student.objects.get(pk=student_id)
        return Notification.objects.filter(student=student, notif_for='student', notif_subject='assignment', notif_read_status=False)

    


# QUIZ VIEWS
# QUIZ VIEWS
# QUIZ VIEWS
class QuizList(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    #permission_classes = [permissions.IsAuthenticated]

# Specific Teacher Quiz(s)
class TeacherQuizList(generics.ListCreateAPIView):
    serializer_class = QuizSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=Teacher.objects.get(pk=teacher_id)
        return Quiz.objects.filter(teacher=teacher)
    
# Specific Teacher Quiz detail
class TeacherQuizDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()
    #permission_classes = [permissions.IsAuthenticated]

class QuizDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    #permission_classes = [permissions.IsAuthenticated]

##### COURSE CHAPTER
class QuizQuestionList(generics.ListAPIView):
    serializer_class = QuestionSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        quiz_id = self.kwargs['quiz_id']
        quiz = Quiz.objects.get(pk=quiz_id)
        if 'limit' in self.kwargs:
            return QuizQuestions.objects.filter(quiz=quiz).order_by('id')[:1]
        elif 'question_id' in self.kwargs:
            current_question = self.kwargs['question_id']
            return QuizQuestions.objects.filter(quiz=quiz, id__gt=current_question).order_by('id')[:1]
        else:
            return QuizQuestions.objects.filter(quiz=quiz)
    

class CourseQuizList(generics.ListCreateAPIView):
    queryset = CourseQuiz.objects.all()
    serializer_class = CourseQuizSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if 'course_id' in self.kwargs:
            course_id=self.kwargs['course_id']
            course = Course.objects.get(pk=course_id)
            return CourseQuiz.objects.filter(course=course)


def fetch_quiz_assign_status(request, quiz_id, course_id):
    quiz = Quiz.objects.filter(id=quiz_id).first()
    course = Course.objects.filter(id=course_id).first()
    assignStatus = CourseQuiz.objects.filter(course=course, quiz=quiz).count()
    if assignStatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    

# ATTEMPT QUIZ VIEW
class AttemptQuizList(generics.ListCreateAPIView):
    queryset = AttemptQuiz.objects.all()
    serializer_class = AttemptQuizSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if 'quiz_id' in self.kwargs:
            quiz_id =self.kwargs['quiz_id']
            quiz = Quiz.objects.get(pk=quiz_id)
            return AttemptQuiz.objects.raw(f"SELECT * FROM main_attemptquiz WHERE quiz_id={int(quiz_id)} GROUP by student_id")


def fetch_quiz_attempt_status(request, quiz_id, student_id):
    quiz = Quiz.objects.filter(id=quiz_id).first()
    student = Student.objects.filter(id=student_id).first()
    attemptStatus = AttemptQuiz.objects.filter(student=student, question__quiz=quiz).count()
    if attemptStatus > 0:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
   
   
#attempted questions in quiz result page   
def fetch_quiz_attempt_status(request, quiz_id, student_id):
    quiz = Quiz.objects.filter(id=quiz_id).first()
    student = Student.objects.filter(id=student_id).first()
    total_questions = QuizQuestions.objects.filter(quiz=quiz).count()
    total_attempted_questions = AttemptQuiz.objects.filter(quiz=quiz, student=student).values('student').count()
    return JsonResponse({'total_questions':total_questions, 'total_attempted_question':total_attempted_questions})
    




##### STUDY MATERIAL LIST
class StudyMaterialList(generics.ListCreateAPIView):
    serializer_class = StudyMaterialSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id = self.kwargs['course_id']
        course = Course.objects.get(pk=course_id)
        return StudyMaterial.objects.filter(course=course)
    
### STUDY MATERIAL DETAIL VIEW
class StudyMaterialDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StudyMaterial.objects.all()
    serializer_class = StudyMaterialSerializer
    #permission_classes = [permissions.IsAuthenticated]
    



    

    