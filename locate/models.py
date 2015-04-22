from django.db import models

# Create your models here.

class ClassroomLayout(models.Model):
    file_upload = models.ImageField(upload_to='layouts/')
    filename = models.TextField(max_length=30)
    # mime_type = models.TextField(max_length=20)
    title = models.TextField(max_length=30)

    def __str__(self):
        return self.title