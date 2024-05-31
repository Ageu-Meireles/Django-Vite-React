from django.db import models

class Book(models.Model):
    class Meta:
        verbose_name = "Livro"
        verbose_name_plural = "Livros"
        ordering = ["title"]

    title = models.CharField(verbose_name="Título", max_length=100)
    year = models.IntegerField(
        verbose_name="Ano de lançamento", null=True, blank=True
    )
    author = models.ForeignKey(
        "Author", on_delete=models.CASCADE, verbose_name="Autor", 
        related_name="books", null=True, blank=True,
    )

    def __str__(self):
        return self.title


class Author(models.Model):
    class Meta:
        verbose_name = "Autor"
        verbose_name_plural = "Autores"
        ordering = ["name"]
    
    name = models.CharField(verbose_name="Nome do autor", max_length=100)

    def __str__(self):
        return self.name
