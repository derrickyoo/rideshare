from django.urls import path

from .views import SignUpView


app_name = "users"
urlpatterns = [
    path("sign_up/", SignUpView.as_view(), name="sign_up"),
]
