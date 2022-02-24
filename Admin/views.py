from django.shortcuts import render, redirect
from .models import Post ,Category, MyUser
from django.core.paginator import Paginator
from taggit.models import Tag
from .forms import CreateCategoryForm




def index(request):
    news = Post.objects.all()
    category = Category.objects.all()
    return render(request,'index.html',{'news':news,'categories':category})

# def search(request):
#     results = None
#     category = Category.objects.all()
#     try:
#         query = request.POST['query']
#         results = Post.objects.filter(name__icontains=query) |\
#             Post.objects.filter(category__name=query)

#         return render(
#             request,
#             'index.html',
#             {'news': results,'categories':category}
#         )
#     except KeyError:
#         "KeyError"
#         return render(
#             request,
#             'index.html',
#             {'news': results,'categories':category}
#         )

def search(request):
    results = None
    category = Category.objects.all()
    try:
        query = request.POST['query']
        results = Post.objects.filter(name__icontains=query) |\
            Post.objects.filter(description__icontains=query)
        paginator = Paginator(results, 20)
        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)

        return render(
            request,
            'index.html',
            {'news': page_obj,'categories':category}
        )
    except KeyError:
        "KeyError"
        return render(
            request,
            'index.html',
            {'news': results,'categories':category})




def categories(request):
    category = Category.objects.all()
    a = 'salom'
    paginator = Paginator(category, 20)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    if request.method == "POST":
        form = CreateCategoryForm(request.POST)
        if form.is_valid():
            form.save()
            redirect('categories')
    else :
        form = CreateCategoryForm()
    return render(request, 'Category.html',{'news':page_obj,'form':form,'a':a})
    
def sort(request):
    results = None
    category = Category.objects.all()
    try:
        query = request.POST['query']
        results = Category.objects.filter(name__icontains=query)

        return render(
            request,
            'Category.html',
            {'news': results,'categories':category}
        )
    except KeyError:
        "KeyError"
        return render(
            request,
            'Category.html',
            {'cateory': results,'categories':category}
        )

def UserList(request):
    admin = MyUser.objects.all()
    return render(request,'userlist.html',{'admin':admin})

def tagview(request):
    tags = Tag.objects.all()
    return render(request, 'tags.html',{'tags':tags})