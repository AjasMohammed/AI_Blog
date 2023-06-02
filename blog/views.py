from django.shortcuts import render

# Create your views here.
def blogposts(request):
    
    return render(request, 'blog/blog.html')