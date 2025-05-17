from django.urls import path
from blog.api.views.blogs import BlogPostCardListView, BlogPostDetailView, BlogPostListView
urlpatterns = [
    path('all/', BlogPostListView.as_view(), name='blog-list'),
    path('cards/', BlogPostCardListView.as_view(), name='blog-cards'),
    path('<uuid:uid>/', BlogPostDetailView.as_view(), name='blog-detail'),
]