# Generated by Django 3.2.7 on 2021-10-08 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pekerti', '0003_auto_20211008_1327'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gelombang',
            name='end_date',
            field=models.DateField(verbose_name='Tanggal Berakhir'),
        ),
        migrations.AlterField(
            model_name='gelombang',
            name='start_date',
            field=models.DateField(verbose_name='Tanggal Mulai'),
        ),
    ]