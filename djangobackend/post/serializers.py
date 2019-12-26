from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):

    # author = serializers.ReadOnlyField(source='author.username')
   
    class Meta:
        model = models.Post
        fields = ('id', 'title', 'image', 'content', 'author')   