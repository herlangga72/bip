from django.contrib import admin
from pekerti.models import Peserta,Gelombang
# Register your models here.

@admin.register(Peserta)
class Peserta(admin.ModelAdmin):
    list_display = ("nama","nidn","institusi_asal","gelombang","nomer_telp","is_validated","link_sertifikat")

    def Sertifikat(self, obj):
        return bool(obj.linkSertifikat)==True
    
    #displayed
    list_filter = ["nama","nidn","institusi_asal","gelombang","nomer_telp","is_validated"]
    search_fields = ["nama","nidn","institusi_asal","gelombang","nomer_telp","is_validated"]
    Sertifikat.boolean = True

@admin.register(Gelombang)
class Gelombang(admin.ModelAdmin):
    list_display=['gelombang', 'start_date', 'end_date', 'link_openlearning', 'link_akses_kelas']

from django.apps import apps
models = apps.get_models()

for model in models:
    try:
        admin.site.register(model)
    except admin.sites.AlreadyRegistered:
        pass