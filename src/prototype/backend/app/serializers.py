from rest_framework import serializers
from . models import *

class VMSerializer(serializers.ModelSerializer):
    class Meta:
        model = VM
        fields = ['id','dns_name', 'created_at', 'team_id', 'team_name', 'team_email', 'external_net', 'ip', 'operating_sys', 'allocationStage']
        extra_kwargs = {
            'dns_name': {'required': True},
            'created_at':  {'required': False},
            'team_id': {'required': True},
            'team_name': {'required': True},
            'team_email': {'required': True},
            'external_net': {'required': False},
            'ip': {'required': True},
            'operating_sys': {'required': True},
            'allocationStage': {'required': False}
        }