# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-29 22:04
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_auto_20170529_1803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
