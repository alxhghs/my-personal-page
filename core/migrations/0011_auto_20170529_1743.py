# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-29 21:43
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_project_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.DateField(default=datetime.datetime(2017, 5, 29, 17, 43, 13, 403323)),
        ),
    ]
