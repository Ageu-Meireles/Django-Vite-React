from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()

router.register('authors', views.AuthorsViewSet)
router.register('books', views.BooksViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('home/', views.HomeView.as_view(), name='teste-vite'),
    path('authors/', views.AuthorsView.as_view(), name='teste-vite'),
    path('books/', views.BooksView.as_view(), name='teste-vite'),
]
