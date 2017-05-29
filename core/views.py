from django.shortcuts import render
from core.models import Project


def index(request):
    title = "Alex Hughes"
    # projects = Project.objects.order_by('-date')
    context_dict = {
                    # 'projects': projects,
                    'title': title,
                    }
    return render(request, 'core/templates/index.html', context_dict)


def resume(request):
    title = "| Resume"
    # projects = Project.objects.order_by('-date')
    context_dict = {
                    # 'projects': projects,
                    'title': title,
                    }
    return render(request, 'core/templates/resume.html', context_dict)
