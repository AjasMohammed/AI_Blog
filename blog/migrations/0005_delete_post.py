# Generated by Django 4.2.1 on 2023-06-02 18:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_remove_post_slug'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Post',
        ),
    ]
