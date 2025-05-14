from django.contrib import admin
from admin_panal.models import BlogUrl, BlogPost, Tags

# Register your models here.
admin.site.register(BlogUrl)
admin.site.register(BlogPost)
admin.site.register(Tags)