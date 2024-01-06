# Generated by Django 5.0.1 on 2024-01-03 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_rename_opertation_sys_vm_operating_sys_alter_vm_ip'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='vm',
            name='intern_net',
        ),
        migrations.AddField(
            model_name='vm',
            name='allocationStage',
            field=models.CharField(choices=[('unassigned', 'Unassigned'), ('preparation', 'Preparation'), ('in_use', 'In_use')], default='unassigned', max_length=20),
        ),
        migrations.AddField(
            model_name='vm',
            name='external_net',
            field=models.BooleanField(default=False),
        ),
    ]