# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-29 21:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_project_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(default='Project', max_length=128),
        ),
    ]
