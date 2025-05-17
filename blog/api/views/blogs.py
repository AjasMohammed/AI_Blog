from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from blog.api.serializers.blogs import BlogPostBaseSerializer, BlogPostDetailSerializer
from blog.api.serializers.tags import TagsSerializer
from admin_panal.models import BlogPost, Tags
from blog.api.pagination import CustomPageNumberPagination


class BlogPostCardListView(APIView):
    def get(self, request):
        """
        Get a list of the six most recent blog posts.

        Returns:
            Response: A response object with a list of the six most recent blog posts.
        """
        posts = BlogPostBaseSerializer(
            BlogPost.objects.all().order_by("-created_at")[:6], many=True)
        return Response(data=posts.data, status=status.HTTP_200_OK)


class BlogPostListView(APIView):
    pagination_class = CustomPageNumberPagination

    def get(self, request):
        """
        Get a list of all blog posts.

        Returns:
            Response: A response object with a list of all blog posts.
        """
        tag_query = request.query_params.get('tag')
        if tag_query and tag_query != "null":
            posts = BlogPost.objects.filter(tags__uid=tag_query).order_by("-created_at")
        else:
            posts = BlogPost.objects.all().order_by("-created_at")
        tags = TagsSerializer(Tags.objects.all()[:30], many=True).data
        paginator = self.pagination_class()
        paginated_posts = paginator.paginate_queryset(posts, request)
        serializers = BlogPostBaseSerializer(paginated_posts, many=True)
        paginated_response = paginator.get_paginated_response(serializers.data)
        return Response({
            "message": "Blog posts fetched successfully",
            "total_posts": paginator.page.paginator.count,
            "page": paginator.page.number,
            "next": paginator.page.next_page_number() if paginator.page.has_next() else None,
            "prev": paginator.page.previous_page_number() if paginator.page.has_previous() else None,
            "total_pages": paginator.page.paginator.num_pages,
            "results": paginated_response.data["results"],
            "tags": tags
        })


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
        related_posts = BlogPost.objects.filter(tags__in=post.tags.all()).exclude(
            uid=uid).distinct().order_by("-created_at")[:8]
        related_posts_serializer = BlogPostBaseSerializer(
            related_posts, many=True)
        serializer = {"post": blog_serializer.data,
                      "related_posts": related_posts_serializer.data}
        return Response(data=serializer, status=status.HTTP_200_OK)
