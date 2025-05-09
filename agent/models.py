from gpt_ai.base_models import BaseModel
from django.db import models


class BaseMessageModel(BaseModel):
    model_used = models.CharField(max_length=1000, help_text="AI model used for this message")
    class Meta:
        abstract = True


class UserMessage(BaseMessageModel):
    url = models.CharField(max_length=1000)
    raw_data = models.JSONField()
    class Meta:
        db_table = 'conversation'

    def __str__(self):
        return f"{self.url}"


class ModelMessage(BaseMessageModel):
    parent = models.ForeignKey(
        UserMessage, on_delete=models.CASCADE, related_name='response')
    content = models.JSONField()
    class Meta:
        db_table = 'model_message'
    def __str__(self):
        return f"{self.ai_model} - {self.parent.url}"
