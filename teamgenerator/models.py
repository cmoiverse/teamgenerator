from django.db import models

# 1. python manage.py makemigrations polls
# 2. python manage.py migrate
# 3. python manage.py shell

# Create your models here.
class Team(models.Model):
    person_count = models.IntegerField(default=0, null=True)
    # persons = []
    def __str__(self):
        return "Team has " + str(self.person_count) + " members"
    def add_person(self, person):
        self.person_count += 1
    
class Person(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    def set_team(self, team):
        self.team = team
        team.add_person(self)
    def get_team(self):
        return self.team
    def __str__(self):
        return self.name
