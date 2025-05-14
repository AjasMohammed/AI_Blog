from django.urls import path
from blog.api.views.blogs import BlogPostListView, BlogPostDetailView
urlpatterns = [
    path('all/', BlogPostListView.as_view(), name='blog-list'),
    path('<uuid:uid>/', BlogPostDetailView.as_view(), name='blog-detail'),
]