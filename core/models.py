from django.db import models

from versatileimagefield.fields import VersatileImageField


class Project(models.Model):
    img = VersatileImageField('Image', upload_to='project_images/')
    description = models.TextField()


class Resume(models.Model):
    TYPE_CHOICES = (
        ('Volunteer', 'Volunteer'),
        ('Work', 'Work'),
        ('Education', 'Education'),
        ('4Winter', 'Winter'),
    )
    _max_length = 128
    _type = models.CharField(max_length=_max_length, choices=TYPE_CHOICES)
    title = models.CharField(max_length=_max_length)
    organization = models.CharField(max_length=_max_length)
