from django.db import models
from datetime import datetime
from django.utils import timezone
from django.conf import settings

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=500, default="hi")  # 제목
    content = models.TextField(blank=True) # 내용
    created_at = models.DateTimeField(auto_now_add=True) # 등록일
    updated_at = models.DateTimeField(auto_now=True) # 수정일

    image = models.ImageField(default="default_image.jpg") # 이미지
    author = models.CharField(max_length=100, default="null") # 작성자
    # author = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
   
    def __str__(self):
        return self.title
'''
class Review(models.Model):
    post_id = models.IntegerField(default=1) # 물품 번호(FK)
    description = models.TextField(blank=True) # 후기내용
    created_at = models.DateField(default=timezone.now) # 등록일
    buy_user = models.IntegerField(default=1) # 구매자
'''

class Comment(models.Model):
    post=models.ForeignKey(Post, on_delete=models.CASCADE, null=True, related_name='comments')
    comment_date = models.DateTimeField(auto_now_add=True)
    comment_content = models.CharField(max_length=50)

    def __str__(self):
        return self.comment_body
    
    class Meta:
        ordering=['-id']