from rest_framework import serializers
from .models import Peserta, Gelombang

class PesertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peserta
        fields = ["nama","nidn","institusi_asal","gelombang","nomer_telp","is_validated","link_transfer","link_penugasan",'link_kesanggupan',"link_sertifikat"]

class GelombangSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gelombang
        fields = ["gelombang","start_date","end_date","link_openlearning","link_akses_kelas"]

