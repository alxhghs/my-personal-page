from django.utils import timezone
from django.db import models
from versatileimagefield.fields import VersatileImageField

_max_length = 128


class Project(models.Model):
    img = VersatileImageField('Image', upload_to='project_images/')
    title = models.CharField(max_length=_max_length, default="Project")
    description = models.TextField()
    date = models.DateField(default=timezone.now)
    url = models.URLField()


class Resume(models.Model):
    TYPE_CHOICES = (
        ('Volunteer', 'Volunteer'),
        ('Work', 'Work'),
        ('Education', 'Education'),
        ('Skills', 'Skills'),
        ('Meetup', 'Meetup'),
    )

    sub_type = models.CharField(max_length=_max_length, choices=TYPE_CHOICES)
    title = models.CharField(max_length=_max_length, blank=True)
    organization = models.CharField(max_length=_max_length, blank=True)
    date = models.CharField(max_length=_max_length, blank=True)

    class Meta:
        verbose_name_plural = "Resume"
