from admin_panal.models import Tags
from rest_framework import serializers


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = ['name', 'uid']