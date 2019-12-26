from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers

from rest_framework.filters import SearchFilter # 필터

class PostViewset(viewsets.ModelViewSet):
    queryset = models.Post.objects.all()
    serializer_class = serializers.PostSerializer

    filter_backends = [SearchFilter]
    search_fields = ('title', 'content')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):

        qs = super().get_queryset()

        return qs
