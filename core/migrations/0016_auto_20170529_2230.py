# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-30 02:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_auto_20170529_1804'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resume',
            name='date',
            field=models.CharField(blank=True, max_length=128),
        ),
    ]
