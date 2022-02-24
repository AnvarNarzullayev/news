from django.urls import path
from .views import index , search ,categories,sort,UserList, tagview

urlpatterns = [
    path('', index, name ='home'),
    path('search',search, name='news_search'),
    path('category/',categories,name = 'categories'),
    path('category/sort',sort, name='sort_category'),
    path('user/',UserList,name='user_list'),
    path('tags/',tagview,name = 'tags_view')
]