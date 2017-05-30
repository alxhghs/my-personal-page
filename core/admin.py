from django.contrib import admin
from core.models import Project, Resume


class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'img', 'description', 'date')


class ResumeAdmin(admin.ModelAdmin):
    list_display = ('sub_type', 'title', 'organization', 'date')


admin.site.register(Project, ProjectAdmin)
admin.site.register(Resume, ResumeAdmin)
