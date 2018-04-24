from django.db import models

# Create your models here.
class Team(models.Model):
    # team = models.ForeignKey()
    @classmethod
    def create(cls):
        team = cls()
        return team

    @classmethod
    def addPerson(cls):
        pass

class Person(models.Model):
    name = models.CharField(max_length=200)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    @classmethod
    def create(cls, name):
        person = cls(name=name)
        return person


    