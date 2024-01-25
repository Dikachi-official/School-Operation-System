from django.db import models
from django.db.models.signals import post_save
#from django.contrib.auth.models import AbstractUser


'''
class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def profile(self):
        profile = Profile.objects.get(user=self)

    

# profile Model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    is_admin = models.BooleanField(default=False)

    # USE USERNAME IF FULLNAME FIELD IS BLANK
    def save(self, *args, **kwargs):
        if self.full_name == "" or self.full_name == None:
            self.full_name = self.user.username
        super(Profile, self).save(*args, **kwargs)

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
'''


# Student Model
class Student(models.Model):
    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    password = models.CharField(max_length=150)
    username = models.CharField(max_length=200)
    mobile_no = models.IntegerField()
    interested_categories = models.TextField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.full_name



# Teacher Model
class Teacher(models.Model):
    full_name = models.CharField(max_length=150)
    bio = models.TextField(null=True)
    email = models.EmailField()
    password = models.CharField(max_length=150)
    qualification = models.CharField(max_length=200)
    mobile_no = models.IntegerField()
    skills = models.TextField(default="Engineering")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.full_name
    
    def skill_list(self):
        skill_list=self.skills.split(",")
        return skill_list
