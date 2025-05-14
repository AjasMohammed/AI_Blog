from rest_framework import serializers
from admin_panal.models import BlogPost, Tags


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['name', 'uid']

class BlogPostBaseSerializer(serializers.ModelSerializer):
    tags = TagsSerializer(many=True)
    class Meta:
        model = BlogPost
        fields = ['uid', 'title', 'summary', 'tags']


class BlogPostDetailSerializer(serializers.ModelSerializer):
    tags = TagsSerializer(many=True)
    class Meta:
        model = BlogPost
        fields = '__all__'