from rest_framework import generics
from .models import Furniture
from .serializers import FurnitureSerializer

class FurnitureList(generics.ListAPIView):
    queryset = Furniture.objects.all()
    serializer_class = FurnitureSerializer