from django.contrib import admin
from .models import UserMessage, ModelMessage


admin.site.register(UserMessage)
admin.site.register(ModelMessage)
