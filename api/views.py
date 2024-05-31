from django.views.generic import TemplateView
from rest_framework import viewsets
from . import serializers
from . import models


class HomeView(TemplateView):
    template_name = 'home/index.html'


class AuthorsView(TemplateView):
    template_name = 'authors/index.html'


class BooksView(TemplateView):
    template_name = 'books/index.html'


class AuthorsViewSet(viewsets.ModelViewSet):
    """
    Controle de Autores
    """
    queryset = models.Author.objects.all()
    serializer_class = serializers.AuthorSerializer


class BooksViewSet(viewsets.ModelViewSet):
    """
    Controle de Livros
    """
    queryset = models.Book.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return serializers.BookCreateSerializer
        return serializers.BookSerializer
