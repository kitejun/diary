from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
import post.views 

from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('posts', post.views.PostViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)