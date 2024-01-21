from rest_framework import serializers
from .models import VM

class VMSerializer(serializers.ModelSerializer):
    class Meta:
        model = VM
        fields = ['id', 'hostname', 'project_name', 'contact_email', 'contact_name', 'ip', 'operating_sys', 'allocationStage', 'awarded_on']
        extra_kwargs = {
            'dns_name': {'required': True},
            'project_name': {'required': False},
            'contact_email': {'required': False},
            'contact_name': {'required': False},
            'ip': {'required': True},
            'operating_sys': {'required': True},
            'allocationStage': {'required': False},
            'awarded_on': {'required': False}
        }
