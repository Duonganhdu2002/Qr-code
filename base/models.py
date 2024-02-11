from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    
class Barcode(models.Model):
    image = models.CharField(max_length=100) 
    created = models.DateTimeField(auto_now_add=True)
    
class Qrcode(models.Model):
    image = models.CharField(max_length=100) 
    created = models.DateTimeField(auto_now_add=True)