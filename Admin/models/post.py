from django.db import models
from model_utils.fields import StatusField
from model_utils import Choices
from django_quill.fields import QuillField
from .category import Category
from taggit.managers import TaggableManager
from .postAuthor import MyUser
# Create your models here.


class Post(models.Model):
    name = models.CharField(max_length = 200)
    slug = models.SlugField(unique=True, max_length=100)
    img = models.ImageField(upload_to='image/', default=True)
    short_info = models.CharField(max_length = 150)
    description = QuillField()
    category = models.ForeignKey('Category', on_delete = models.CASCADE)
    tags = TaggableManager()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    STATUS = Choices('draft', 'published', 'disabled', 'posted')
    status = StatusField()
    views = models.PositiveBigIntegerField(default = 0)
    author = models.ForeignKey('MyUser', on_delete = models.CASCADE)
    is_main = models.BooleanField(default = False)


    def __str__(self):
        return self.name