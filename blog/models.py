from django.db import models
from versatileimagefield.fields import VersatileImageField


class Blog(models.Model):
    title = models.CharField(max_length=128)
    img = VersatileImageField('Image', upload_to='blog_images/')
    text = models.TextField()
    date = models.DateField()
