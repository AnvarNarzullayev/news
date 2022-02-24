from django.db import models

class Category(models.Model):
    name = models.CharField(max_length = 200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    is_hidden = models.BooleanField()
    is_home = models.BooleanField()
    creted_at = models.DateTimeField(auto_now_add = True)
    

    def __str__(self):
        return self.name