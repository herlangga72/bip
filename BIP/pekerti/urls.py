from django.urls import path
from pekerti import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/peserta/', views.peserta_list),
    path('api/peserta/<int:pk>/', views.peserta_detail),
    path('api/gelombang/', views.peserta_list),
    path('api/gelombang/<int:pk>/', views.peserta_detail),
] + static(settings.STATIC_URL , document_root=settings.STATIC_ROOT[0])