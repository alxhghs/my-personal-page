from django.shortcuts import render
from core.models import Project, Resume


def index(request):
    projects = Project.objects.order_by('-date')
    context_dict = {
        'projects': projects
    }
    return render(request, 'core/templates/index.html', context_dict)


def resume(request):
    resume_element = Resume.objects.order_by('-date')
    context_dict = {
                    'resume': resume_element,
                    }
    return render(request, 'core/templates/resume.html', context_dict)
