from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
import post.views 

router = routers.DefaultRouter()
router.register('posts', post.views.PostViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]