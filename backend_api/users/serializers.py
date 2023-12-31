from rest_framework import serializers
from .models import User
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_student', 'is_teacher',)



class CustomRegisterSerializer(RegisterSerializer):
    is_student = serializers.BooleanField()
    is_teacher = serializers.BooleanField()

    class Meta:
        model = User
        fields = ('email', 'username', 'password', 'is_student', 'is_teacher',)
