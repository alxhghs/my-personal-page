import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE',
                      'alxhghs_project.settings')

import django
django.setup()
from core.models import Project, Resume


def populate():

    projects = [
        {"img": "project_images/cold_stream_pond.jpg",
         "title": "Cold Stream Pond Camp Owners' Association",
         "description": "Developed using Python, Django, Bootstrap, HTML, CSS and JavaScript",
         "url": "http://alxhghs.pythonanywhere.com"
         },
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
         "date": "2016 - Present"},
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
        # Skills
        {"type": "Skills",
         "title": "Python",
         "organization": "",
         "date": ""},
        {"type": "Skills",
         "title": "CSS",
         "organization": "",
         "date": ""},
        {"type": "Skills",
         "title": "HTML",
         "organization": "",
         "date": ""},
        {"type": "Skills",
         "title": "Django",
         "organization": "",
         "date": ""},
        {"type": "Skills",
         "title": "SPSS",
         "organization": "",
         "date": ""},
        {"type": "Skills",
         "title": "Typing 100 WPM",
         "organization": "",
         "date": ""},
        # Meetups
        {"type": "Meetup",
         "title": "",
         "organization": "Code for Boston",
         "date": 2017},
        {"type": "Meetup",
         "title": "",
         "organization": "Boston Python Users Group",
         "date": 2017},
        {"type": "Meetup",
         "title": "",
         "organization": "Django Boston",
         "date": 2017},
    ]

    for project in projects:
        add_project(title=project["title"],
                    img=project["img"],
                    description=project["description"],
                    url=project["url"],
                    )

    for resume in resumes:
        add_resume(sub_type=resume["type"],
                   title=resume["title"],
                   organization=resume["organization"],
                   date=resume["date"]
                   )


def add_project(title, img, description, url):
    project = Project.objects.get_or_create(title=title, img=img)[0]
    project.title = title
    project.description = description
    project.url = url
    project.save()
    return project


def add_resume(sub_type, title, organization, date):
    resume = Resume.objects.get_or_create(sub_type=sub_type, title=title)[0]
    resume.organization = organization
    resume.date = date
    resume.save()
    return resume

# Start execution here!
if __name__ == '__main__':
    print("Starting Core population script...")
    populate()
