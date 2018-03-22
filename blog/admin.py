from django.contrib import admin
from blog.models import Blog


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'img', 'text', 'date')


admin.site.register(Blog, BlogAdmin)
