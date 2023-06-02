from django.shortcuts import render
from admin_panal.models import Post


# Create your views here.
def bloghome(request):
    
    posts = Post.objects.all()
    data = {'posts': posts}

    return render(request, 'blog/blog.html', data)


def blog_post(request, sno):
    post = Post.objects.get(serial_no=sno)
    context = {'post': post}
    return render(request, "blog/blogpost.html", context)

    


