from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('', views.post_url, name='post_url'),
    path('<int:serial_no>', views.delete_item, name="delete_item"),
]