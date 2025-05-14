from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from blog.api.serializers.blogs import BlogPostBaseSerializer, BlogPostDetailSerializer
from admin_panal.models import BlogPost


class BlogPostListView(APIView):
    def get(self, request):
        """
        Get a list of the six most recent blog posts.

        Returns:
            Response: A response object with a list of the six most recent blog posts.
        """
        posts = BlogPostBaseSerializer(BlogPost.objects.all().order_by("-created_at")[:6], many=True)
        return Response(data=posts.data, status=status.HTTP_200_OK)


class BlogPostDetailView(APIView):
    def get(self, request, uid):
        """
        Get the details of a specific blog post.

        Args:
            uid (uuid): The uuid of the blog post.

        Returns:
            Response: A response object with the details of the blog post.
        """
        post = get_object_or_404(
            BlogPost.objects.prefetch_related('tags'), uid=uid)
        blog_serializer = BlogPostDetailSerializer(post)
        related_posts = BlogPost.objects.filter(tags__in=post.tags.all().exclude(uid=uid)).distinct().order_by("-created_at")[:6]
        related_posts_serializer = BlogPostBaseSerializer(related_posts, many=True)
        serializer = {"post": blog_serializer.data,
                      "related_posts": related_posts_serializer.data}
        return Response(data=serializer, status=status.HTTP_200_OK)
