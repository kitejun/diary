from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):

    author = serializers.ReadOnlyField(source='author.username')
   
    class Meta:
        model = models.Post
<<<<<<< HEAD
        fields = '__all__'

    
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = '__all__'
=======
        fields = ('id', 'title', 'content', 'author', 'image')   
>>>>>>> master
