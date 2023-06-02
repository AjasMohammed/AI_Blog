from django.db import models

# Create your models here.

class Post(models.Model):
    
    serial_no = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=10000)
    time_stamp = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True, blank=True)
    slug = models.CharField(max_length=1000, default="", null=False)

    def __str__(self):
        return self.title