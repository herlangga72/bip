from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Peserta, Gelombang
from .serializers import PesertaSerializer, GelombangSerializer


@api_view(['GET', 'POST'])
def peserta_list(request):
    if request.method == 'GET':
        peserta = Peserta.objects.all()
        serializer = PesertaSerializer(peserta, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PesertaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def peserta_detail(request, pk):
    try:
        peserta = Peserta.objects.get(pk=pk)
    except Peserta.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = PesertaSerializer(peserta)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PesertaSerializer(peserta, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        peserta.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def gelombang_list(request):
    if request.method == 'GET':
        gelombang = Gelombang.objects.all()
        serializer = GelombangSerializer(gelombang, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = GelombangSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def gelombang_detail(request, pk):
    try:
        gelombang = Gelombang.objects.get(pk=pk)
    except Gelombang.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = GelombangSerializer(gelombang)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = GelombangSerializer(gelombang, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        gelombang.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


