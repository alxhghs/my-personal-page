from django.shortcuts import render
from blog.models import Blog

def blog(request):
    blog = Blog.objects.order_by('-date')
    context_dict = {
        'blog': blog,
    }
    return render(request, 'blog/templates/blog.html', context_dict)
