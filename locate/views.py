from django.shortcuts import render
from django.core import serializers
from django.forms.models import model_to_dict
from locate.models import *


def gethelp(request):
    layout = ClassroomLayout.objects.all()[0]
    # TODO: Add "active" property to classroom layouts and search using that property
    context = {'layout': layout}
    # TODO: Add queue to model
    context['queue_count'] = 0
    return render(request, 'locate/classroom.html', context)

def askquestion(request):
    # TODO: Add Django form for Question input
    # TODO: It would be nice to have a code input form for troubleshooing VBA code
    context = {'queue_count': 0}
    return render(request, 'locate/studentquery.html', context)

def dashboard(request):
    coord_data = StudentLocation.objects.all()
    layout = ClassroomLayout.objects.all()[0]

    # for item in coord_data:
    #     item['StudentLocation'] = model_to_dict(item['StudentLocation'])

    js_data = serializers.serialize('json', coord_data)

    context = {'layout': layout}
    context['js_data'] = js_data
    return render(request, 'locate/ta_dashboard.html', context)