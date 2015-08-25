from django.db import models

# Create your models here.

class ClassroomLayout(models.Model):
    file_upload = models.ImageField(upload_to='layouts/')
    filename = models.TextField(max_length=30)
    # mime_type = models.TextField(max_length=20)
    title = models.TextField(max_length=30)

    def __str__(self):
        return self.title

class StudentLocation(models.Model):
    xcoord = models.DecimalField(max_digits=10, decimal_places=4)
    ycoord = models.DecimalField(max_digits=10, decimal_places=4)

class Ticket(models.Model):
    time = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)
    location = models.OneToOneField(StudentLocation, primary_key=False)





