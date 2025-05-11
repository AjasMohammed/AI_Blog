from django.db import models
from gpt_ai.base_models import BaseModel
from django.contrib.postgres.fields import ArrayField

class BlogUrl(BaseModel):
    name = models.CharField(max_length=1000)
    url = models.CharField(max_length=1000)
    is_feed = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Tags(BaseModel):
    name = models.CharField(max_length=1000)
    def __str__(self):
        return self.name


class BlogPost(BaseModel):
    title = models.CharField(max_length=100)
    summary = models.TextField(max_length=2000)
    content = models.TextField(max_length=10000)
    tags = models.ManyToManyField(Tags, blank=True, null=True)
    external_links = ArrayField(models.CharField(max_length=1000), blank=True, null=True)
    def __str__(self):
        return self.title