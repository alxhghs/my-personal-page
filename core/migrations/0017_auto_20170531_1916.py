# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-31 23:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_auto_20170529_2230'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='sub_type',
            field=models.CharField(choices=[('Volunteer', 'Volunteer'), ('Work', 'Work'), ('Education', 'Education'), ('Skills', 'Skills'), ('Meetup', 'Meetup')], max_length=128),
        ),
        migrations.AlterField(
            model_name='resume',
            name='title',
            field=models.CharField(blank=True, max_length=128),
        ),
    ]
