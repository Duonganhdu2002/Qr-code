# Generated by Django 5.0.2 on 2024-02-11 13:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_bardecode_qrdecode'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bardecode',
            old_name='image',
            new_name='numberString',
        ),
        migrations.RenameField(
            model_name='qrdecode',
            old_name='image',
            new_name='link',
        ),
    ]
