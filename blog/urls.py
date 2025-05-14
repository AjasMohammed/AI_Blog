from django.urls import path, include
from . import views


urlpatterns = [
    # path('api/', include('blog.api.urls'), name='blogs_api'),
    path('', views.bloghome, name='bloghome'),
    path('<uuid:uid>/', views.blog_post, name='blog_post'),
]