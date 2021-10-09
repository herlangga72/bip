from django.db import models

# Create your models here.

class Peserta(models.Model):
    class Meta:
        verbose_name_plural = "Data Peserta"

    nama            = models.CharField  (("Nama Peserta")       , max_length=50)
    nidn            = models.CharField  (("NIDN")               , max_length=10, primary_key=True)
    institusi_asal  = models.CharField  (("Institusi Asal")     , max_length=50)
    email           = models.EmailField (("E-Mail")             , max_length=254)
    nomer_telp      = models.CharField  (("Nomer Telepon")      , max_length=50)
    link_transfer   = models.CharField  (("Bukti Transfer")     , max_length=50)
    link_penugasan  = models.CharField  (("Dokumen Penugasan")  , max_length=50)
    link_kesanggupan= models.CharField  (("Dokumen Kesanggupan"), max_length=50)
    link_sertifikat  = models.CharField  (("Sertifikat")        , max_length=50, blank=True )
    is_validated    = models.BooleanField(("Status Validasi"))
    gelombang       = models.ForeignKey ( "gelombang"   , verbose_name=("Gelombang"), on_delete=models.CASCADE)

class Gelombang(models.Model):

    class Meta:
        verbose_name_plural = "Data Pelaksanaan Gelombang"

    def __str__(self) :
        return "Gelombang " + str(self.gelombang)

    gelombang           = models.IntegerField   ("Gelombang"            , primary_key = True)
    start_date          = models.DateField      (("Tanggal Mulai")      , auto_now=False, auto_now_add=False)
    end_date            = models.DateField      (("Tanggal Berakhir")   , auto_now=False, auto_now_add=False)
    link_openlearning    = models.CharField      ("OpenLearning Link"    , blank=True, max_length=50 )
    link_akses_kelas      = models.CharField      ("Class Access Code"    , blank=True, max_length=50 )
