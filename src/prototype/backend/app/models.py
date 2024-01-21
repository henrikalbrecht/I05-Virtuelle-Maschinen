from django.db import models

class VM(models.Model):
    STATUS_CHOICES = (
        ('unassigned', 'Unassigned'),
        ('preparation', 'Preparation'),
        ('in_use', 'In_use'),
        ('blocked', 'Blocked')
    )
    OPERATING_SYSTEM_CHOICES = (
        ('windows', 'Windows'),
        ('linux', 'Linux'),
    )
    hostname = models.CharField(max_length=50)
    awarded_on = models.DateTimeField(default=None, null=True)
    project_name = models.CharField(max_length=30, default=None, null=True)
    contact_email = models.EmailField(default=None, null=True)
    contact_name = models.CharField(max_length= 20, default=None, null=True)
    ip = models.GenericIPAddressField()
    operating_sys = models.CharField(max_length=20, choices= OPERATING_SYSTEM_CHOICES)
    allocationStage = models.CharField(max_length=20, choices=STATUS_CHOICES, default="unassigned")