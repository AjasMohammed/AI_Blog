from __future__ import absolute_import, unicode_literals
import os

from celery import Celery
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'gpt_ai.settings')

app = Celery('gpt_ai')
app.conf.enable_utc = False

app.conf.update(timezone='Asia/Kolkata')

app.config_from_object('django.conf:settings', namespace='CELERY')

# Celery Beat settings
app.conf.beat_schedule = {
    'blog-post-everyday': {
        'task': 'agent.tasks.generate_and_save_blog_post',
        'schedule': crontab(minute="*/5"),  # every 10 minutes
        # 'schedule': crontab(hour="*", minute=0), # every hour
        # 'schedule': crontab(hour=0, minute=0), # everyday
    }
}

app.autodiscover_tasks()


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
