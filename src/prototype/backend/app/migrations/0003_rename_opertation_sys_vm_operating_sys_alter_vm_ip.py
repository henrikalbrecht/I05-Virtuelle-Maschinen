# Generated by Django 5.0.1 on 2024-01-03 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_vm_delete_react'),
    ]

    operations = [
        migrations.RenameField(
            model_name='vm',
            old_name='opertation_sys',
            new_name='operating_sys',
        ),
        migrations.AlterField(
            model_name='vm',
            name='ip',
            field=models.GenericIPAddressField(),
        ),
    ]