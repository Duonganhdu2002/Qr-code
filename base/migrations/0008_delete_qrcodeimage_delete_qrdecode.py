# Generated by Django 5.0.2 on 2024-02-17 11:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_qrcodeimage_alter_barcodeimage_image'),
    ]

    operations = [
        migrations.DeleteModel(
            name='QrCodeImage',
        ),
        migrations.DeleteModel(
            name='QrDecode',
        ),
    ]
