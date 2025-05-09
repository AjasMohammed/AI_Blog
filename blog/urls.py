from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.bloghome, name='bloghome'),
    path('<uuid:uid>/', views.blog_post, name='blog_post'),
]