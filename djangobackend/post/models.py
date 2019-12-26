from django.db import models
from datetime import datetime
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=500, default="hi")  # 제목
    content = models.TextField(blank=True) # 내용
    created_at = models.DateTimeField(auto_now_add=True) # 등록일
    updated_at = models.DateTimeField(auto_now=True) # 수정일

    image = models.ImageField(default="default_image.jpg") # 이미지
    author = models.CharField(max_length=100, default="false") # 작성자
    
    def __str__(self):
        return self.title
'''
class Review(models.Model):
    post_id = models.IntegerField(default=1) # 물품 번호(FK)
    description = models.TextField(blank=True) # 후기내용
    created_at = models.DateField(default=timezone.now) # 등록일
    buy_user = models.IntegerField(default=1) # 구매자
'''
