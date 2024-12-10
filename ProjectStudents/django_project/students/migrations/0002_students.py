from django.db import migrations

def create_data(apps, schema_editor):
    Student = apps.get_model('students', 'Student')
    Student(name="Joe Silver", email="joe@email.com", document="22342342", phone="00000000", photo='media/photo/nophoto.png').save()
    Student(name="John Smith", email="john@email.com", document="11111111", phone="11111111", photo='media/photo/nophoto.png').save()
    Student(name="Alex Smth", email="alex@email.com", document="22222222", phone="22222222", photo='media/photo/nophoto.png').save()
    Student(name="Kira Night", email="kira@email.com", document="33333333", phone="33333333", photo='media/photo/nophoto.png').save()
    Student(name="Amanda Lex", email="amanda@email.com", document="44444444", phone="44444444", photo='media/photo/nophoto.png').save()
    Student(name="Oni Musha", email="oni@email.com", document="44444444", phone="44444444", photo='media/photo/nophoto.png').save()

class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]