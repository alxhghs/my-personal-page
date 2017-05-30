from django.shortcuts import render
from core.models import Project, Resume


def index(request):
    projects = Project.objects.order_by('-date')
    context_dict = {
        'projects': projects
    }
    return render(request, 'core/templates/index.html', context_dict)


def resume(request):
    work = Resume.objects.filter(sub_type="Work").order_by('-date')
    volunteer = Resume.objects.filter(sub_type="Volunteer").order_by('-date')
    skill = Resume.objects.filter(sub_type="Skills").order_by('title')
    education = Resume.objects.filter(sub_type="Education").order_by('-date')
    context_dict = {
                    'work': work,
                    'volunteer': volunteer,
                    'skill': skill,
                    'education': education,
                    }
    return render(request, 'core/templates/resume.html', context_dict)
