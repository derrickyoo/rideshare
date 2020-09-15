from django.contrib.auth.models import AbstractUser
from model_utils.models import TimeStampedModel


class CustomUser(AbstractUser, TimeStampedModel):
    @property
    def group(self):
        groups = self.groups.all()
        return groups[0].name if groups else None
