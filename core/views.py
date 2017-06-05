from django.shortcuts import render
from core.models import Project, Resume


def index(request):
    project1 = Project.objects.order_by('-date')[0]
    project2 = Project.objects.order_by('-date')[1]
    project3 = Project.objects.order_by('-date')[2]
    context_dict = {
        'project1': project1,
        'project2': project2,
        'project3': project3,
    }
    return render(request, 'core/templates/index.html', context_dict)


def resume(request):
    work = Resume.objects.filter(sub_type="Work").order_by('-date')
    volunteer = Resume.objects.filter(sub_type="Volunteer").order_by('-date')
    skill = Resume.objects.filter(sub_type="Skills").order_by('title')
    education = Resume.objects.filter(sub_type="Education").order_by('-date')
    meetup = Resume.objects.filter(sub_type="Meetup").order_by('-date')
    context_dict = {
                    'work': work,
                    'volunteer': volunteer,
                    'skill': skill,
                    'education': education,
                    'meetup': meetup,
                    }
    return render(request, 'core/templates/resume.html', context_dict)
