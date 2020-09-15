from django.db.models import Q
from rest_framework import permissions, viewsets

from .models import Trip
from .serializers import NestedTripSerializer, TripSerializer


class TripView(viewsets.ReadOnlyModelViewSet):
    lookup_field = "id"
    look_up_rule_kwargs = "trip_id"
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Trip.objects.all()
    serializer_class = NestedTripSerializer

    def get_queryset(self):  # new
        user = self.request.user
        if user.group == "driver":
            return Trip.objects.filter(
                Q(status=Trip.REQUESTED) | Q(driver=user)
            )
        if user.group == "rider":
            return Trip.objects.filter(rider=user)
        return Trip.objects.none()
