# Generated by Django 4.2.9 on 2024-01-19 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='image',
            field=models.ImageField(null=True, upload_to='course_images'),
        ),
        migrations.AddField(
            model_name='course',
            name='technologies',
            field=models.TextField(default='Science & technology'),
        ),
    ]
