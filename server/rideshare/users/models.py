from django.contrib.auth.models import AbstractUser
from django.db import models
from model_utils.models import TimeStampedModel


class CustomUser(AbstractUser, TimeStampedModel):
    photo = models.ImageField(upload_to="photos", null=True, blank=True)

    @property
    def group(self):
        groups = self.groups.all()
        return groups[0].name if groups else None
