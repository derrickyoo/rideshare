from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path

from .middleware import TokenAuthMiddlewareStack
from .trips.consumers import RideshareConsumer

application = ProtocolTypeRouter(
    {
        "websocket": TokenAuthMiddlewareStack(
            URLRouter([path("rideshare/", RideshareConsumer),])
        ),
    }
)
