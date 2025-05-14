from rest_framework import serializers
from admin_panal.models import BlogPost, Tags


class BlogPostBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['uid', 'title', 'summary']


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['name']

class BlogPostDetailSerializer(serializers.ModelSerializer):
    tags = TagsSerializer(many=True)
    class Meta:
        model = BlogPost
        fields = '__all__'