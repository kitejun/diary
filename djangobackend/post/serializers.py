from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Post
        fields = ('id', 'title', 'image', 'content', 'author', 'created_at', 'updated_at')   