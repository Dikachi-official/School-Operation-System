# Generated by Django 4.2.9 on 2024-02-09 11:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_alter_teacher_password_alter_teacher_profile_img'),
        ('API', '0003_studentassignment'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentassignment',
            name='teacher',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user.teacher'),
        ),
    ]
