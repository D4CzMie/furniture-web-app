from django.urls import path
from .views import FurnitureList

urlpatterns = [
    path('furniture/', FurnitureList.as_view(), name='furniture-list'),
]