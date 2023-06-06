from django.shortcuts import render
from admin_panal.models import Post
from django.core.paginator import Paginator


# Create your views here.
def bloghome(request):
    
    posts = Post.objects.all()
    
    paginator = Paginator(posts, 5)  # Create a Paginator instance with 5 posts per page
    page_no = request.GET.get('page')  # Get the current page number from the GET parameters
    page_obj = paginator.get_page(page_no)  # Get the Page object for the current page
    posts = page_obj.object_list  # Retrieve the posts for the current page

    data = {'posts': posts, 'page_obj': page_obj}

    return render(request, 'blog/blog.html', data)


def blog_post(request, sno):
    post = Post.objects.get(serial_no=sno)
    context = {'post': post}
    return render(request, "blog/blogpost.html", context)

    


