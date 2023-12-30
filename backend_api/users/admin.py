from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from .models import User, Student, Profile



class UserAdmin(BaseUserAdmin):
    add_fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_student', 'is_teacher', 'password1', 'password2')
        }),
        
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )

    fieldsets = (
        (None, {
            'fields': ('email', 'username', 'is_student', 'is_teacher', 'password')
        }),

        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )

    list_display = ['is_student', 'is_teacher']
    search_fields = ('email', 'username')
    ordering = ('email',)


class StudentAdmin(admin.ModelAdmin):
    #list_editable = ['verified']
    list_display = ['user']



admin.site.register(User, UserAdmin)
admin.site.register(Profile)
admin.site.register(Student, StudentAdmin)
admin.site.unregister(Group)

