# core/urls.py

from django.conf.urls import url

from core import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^resume/', views.resume, name='resume'),
]
