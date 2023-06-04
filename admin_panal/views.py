from django.shortcuts import render, get_object_or_404, redirect, HttpResponse
from .models import BlogUrl



def post_url(request):
    
    obj = BlogUrl.objects.all()
    
    if request.method == 'POST':
        url = request.POST.get('url')
        name = request.POST.get('name')
        
        for item in obj:
            if url == item.url:
                return HttpResponse('Item Already Exists...')
        
        items = BlogUrl(name=name, url=url)
        items.save()
        
        return redirect('post_url')  # used to prevent the resubmission when reloading.
    
    data = {'obj': obj}
    return render(request, 'admin/admin_panal.html', data)


def delete_item(request, serial_no):
    item = get_object_or_404(BlogUrl,serial_no=serial_no)
    
    if request.method == "POST":
        item.delete()
        return redirect('post_url')
    return render(request, 'admin/admin_panal.html')
        
