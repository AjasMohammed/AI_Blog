from django.urls import path, include

urlpatterns = [
    path('blog/', include('blog.api.urls'), name='blogs_api'),
]