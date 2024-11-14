from chat import views
from django.urls import path

urlpatterns = [
    path('', views.home , name='home'),
    path('<str:room_name>/<str:username>/', views.MessageView, name='room'),
]