from django.shortcuts import render
from locate.models import ClassroomLayout

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

