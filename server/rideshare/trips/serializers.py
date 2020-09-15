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
            "driver",
            "rider",
            "created",
            "modified",
        )
        read_only_fields = (
            "id",
            "created",
            "modified",
        )


class NestedTripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = (
            "id",
            "pick_up_address",
            "drop_off_address",
            "status",
            "driver",
            "rider",
            "created",
            "modified",
        )
        read_only_fields = (
            "id",
            "created",
            "modified",
        )
        depth = 1
