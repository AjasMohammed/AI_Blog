from django.db import models

# Create your models here.

class BlogUrl(models.Model):
    
    serial_no = models.AutoField(primary_key=True)
    name = models.CharField(max_length=1000)
    url = models.CharField(max_length=1000)
    time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    
    serial_no = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=10000)
    time_stamp = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=10000, default="", null=False)

    def __str__(self):
        return self.title