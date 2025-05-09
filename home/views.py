from django.shortcuts import render
from admin_panal.models import BlogPost

# Create your views here.
def home(request):

    posts = BlogPost.objects.all()
    context = {'posts': posts}
    return render(request, 'home/home.html', context)


def search_post(request):

    query = request.GET['query']
    posts = BlogPost.objects.filter(tags__icontains=query)

    context = {'query': query, 'posts': posts}
    print(posts)
    return render(request, 'home/search.html', context)