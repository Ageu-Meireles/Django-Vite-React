from django.contrib import admin
from . import models

@admin.register(models.Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'year', 'author')

@admin.register(models.Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_books')

    @admin.display(description='Livros')
    def get_books(self, obj):
        return [book.title for book in obj.books.all()]
