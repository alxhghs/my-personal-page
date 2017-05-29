from django.contrib import admin
from core.models import Project, Resume


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('img', 'description', 'date')


class ResumeAdmin(admin.ModelAdmin):
    list_display = ('_type', 'title', 'organization', 'date')


admin.site.register(Project, ProjectAdmin)
admin.site.register(Resume, ResumeAdmin)
