from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='homepage'),
    path('search', views.search_post, name="searchpost"),
]