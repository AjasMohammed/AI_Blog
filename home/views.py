from django.shortcuts import render
from admin_panal.models import Post

# Create your views here.
def home(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'home/home.html', context)