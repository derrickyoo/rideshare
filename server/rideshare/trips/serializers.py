from rest_framework import serializers

from .models import Trip


class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = (
            "id",
            "pick_up_address",
            "drop_off_address",
            "status",
            "created",
            "updated",
        )
        read_only_fields = (
            "id",
            "created",
            "updated",
        )
