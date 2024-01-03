from django.db import models

class VM(models.Model):
    dns_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    team_id = models.IntegerField()
    team_name = models.CharField(max_length=30)
    team_email = models.EmailField()
    external_net = models.BooleanField(default=False)
    ip = models.GenericIPAddressField()
    operating_sys = models.CharField(max_length=20)