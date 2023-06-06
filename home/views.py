from django.shortcuts import render
from admin_panal.models import Post

# Create your views here.
def home(request):
    
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'home/home.html', context)


def search_post(request):

    query = request.GET['query']
    posts = Post.objects.filter(tags__icontains=query)
    
    context = {'query': query, 'posts': posts}
    print(posts)
    return render(request, 'home/search.html', context)