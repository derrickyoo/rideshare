from django.contrib import admin

from .models import Trip


@admin.register(Trip)
class TripAdmin(admin.ModelAdmin):
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
    list_display = (
        "status",
    )
    list_filter = ("status",)
    readonly_fields = (
        "id",
        "created",
        "modified",
    )
