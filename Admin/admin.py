from django.contrib import admin

# Register your models here.
from .models import Category, Post, MyUser

admin.site.register([Category,Post,MyUser])