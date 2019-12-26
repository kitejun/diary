from django.db import models
from datetime import datetime
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=500, default="hi")  # 물품 이름 (게시글 제목)
    content = models.TextField(blank=True) # 설명 
    created_at = models.DateTimeField(auto_now_add=True) # 등록일
    updated_at = models.DateTimeField(auto_now=True) # 수정일

    image = models.ImageField(default="default_image.jpg") # 물품 이미지
    price = models.IntegerField(default=1000) # 가격
    sell_user = models.IntegerField(default=1) # 판매자 
    buy_user = models.IntegerField(default=1) # 구매자
    is_sold = models.CharField(max_length=100, default="false") # 판매여부

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