import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'alxhghs_project.settings')

import django
django.setup()
from core.models import Project, Resume


def populate():

    projects = [
        {"img": "/img/cold_stream_pond.jpg",
         "title": "Cold Stream Pond Camp Owners' Association",
         "description": "Developed using Python, Django, Bootstrap, HTML, CSS and JavaScript",
         "date": ""},
    ]

    resumes = [
        # Work
        {"type": "Work",
         "title": "Education and Information Technology Volunteer",
         "organization": "Peace Corps Dominican Republic",
         "date": "2012 - 2014"},
        {"type": "Work",
         "title": "Program Manager",
         "organization": "City Year Boston",
         "date": "2014 - present"},
        {"type": "Work",
         "title": "Translation Contractor",
         "organization": "Mercy Corps",
         "date": "2015 - 2016"},
        {"type": "Work",
         "title": "Peace Corps Campus Representative",
         "organization": "Portland State University / Peace Corps",
         "date": "2014 - 2015"},
        {"type": "Work",
         "title": "Virtual Student Foreign Service Intern",
         "organization": "U.S. Agency for International Development",
         "date": "2014 - 2015"},
        {"type": "Work",
         "title": "Education and Information Technology Volunteer",
         "organization": "Peace Corps Dominican Republic",
         "date": "2012 - 2014"},
        {"type": "Work",
         "title": "Circulation Staff Leader",
         "organization": "Salem Public Library",
         "date": "2011 - 2012"},
        # Education
        {"type": "Education",
         "title": "Master of Public Administration",
         "organization": "Portland State University",
         "date": "2016"},
        {"type": "Education",
         "title": "Bachelor of Arts in Spanish and History",
         "organization": "University of Oregon",
         "date": "2010"},
        {"type": "Education",
         "title": "Undergraduate Study Abroad",
         "organization": "Pontificia Universidad Católica del Ecuador",
         "date": "2010"},
        # Volunteer
        {"type": "Volunteer",
         "title": "Cultural Interpreter",
         "organization": "Engineers Without Borders",
         "date": "2015 - 2016"},
        {"type": "Volunteer",
         "title": "Board Secretary",
         "organization": "Public Administration Student Association",
         "date": "2015 - 2016"},
    ]

    for project in projects:
        add_project(img=project["img"],
                    description=project["description"],
                    )

    for resume in resumes:
        add_resume(_type=resume["type"],
                   title=resume["title"],
                   organization=resume["organization"],
                   date=resume["date"]
                   )


def add_project(img, description):
    project = Project.objects.get_or_create(img=img)[0]
    project.description = description
    project.save()
    return project


def add_resume(_type, title, organization, date):
    resume = Resume.objects.get_or_create(_type=_type, title=title)[0]
    resume.organization = organization
    resume.date = date
    resume.save()
    return resume

# Start execution here!
if __name__ == '__main__':
    print("Starting Core population script...")
    populate()
