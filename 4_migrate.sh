#!/usr/bin/sh
./start.sh &&
cd BIP &&
./manage.py makemigrations &&
./manage.py migrate &&
./manage.py runserver