from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import VM
from .serializers import VMSerializer

from rest_framework import generics

class VMView(generics.ListCreateAPIView):
    queryset = VM.objects.all()
    serializer_class = VMSerializer

    def post(self, request, *args, **kwargs):
        name = request.data.get('dns_name')
        existing_react = VM.objects.filter(dns_name=name).first()

        if existing_react:
            # Wenn ein Objekt mit dem gleichen Namen existiert, aktualisiere es
            serializer = VMSerializer(existing_react, data=request.data)
        else:
            serializer = VMSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VMDeleteView(generics.RetrieveDestroyAPIView):
    queryset = VM.objects.all()
    serializer_class = VMSerializer