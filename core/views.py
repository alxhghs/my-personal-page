from django.shortcuts import render
from core.models import Project


def index(request):
    projects = Project.objects.order_by('-date')
    context_dict = {
        'projects': projects
    }
    return render(request, 'core/templates/index.html', context_dict)


def resume(request):
    resume = Resume.objects.order_by('-date')
    context_dict = {
                    'title': title,
                    'resume': resume,
                    }
    return render(request, 'core/templates/resume.html', context_dict)
