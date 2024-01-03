from django.urls import path
from .views import *

urlpatterns = [
    path('VM/', VMView.as_view(), name='VM-list-create'),
    path('VM/<int:pk>/', VMDeleteView.as_view(), name='VM-delete')
]