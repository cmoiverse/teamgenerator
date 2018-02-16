'''
    This program will be used to arrange members of the department
    into sub-units equally (for now) and randomly
    For example,
    Given A, B, C, D, E, F,G
    If you want to have 2 teams based on this you would get [A, B, C] & [D, E, F, G]
    in one scenario and [A, D, F] and [B, C, E, G]
    3 teams e.g. [A, B], [C, D], [E, F, G]
'''

import random

def generate_teams(no_of_teams, items, teams):
    '''
        this function arranges members into different teams
        items - array of items to arrange into teams
    '''
    '''[] for x in range(no_of_teams)'''
    if(len(items) == 0):
        print("no items")
        return teams
    for team in range(no_of_teams):
        if(items == []):
            return teams
        if(len(teams) != no_of_teams):
            teams.append([items.pop()])
        else:
            i = no_of_teams
            if i != 0:
                for team in teams:
                    if(items == []):
                        return teams
                    team.append(items.pop())
                    i = i - 1
            # else:
            #     generate_teams(no_of_teams, items, teams)
    generate_teams(no_of_teams, items, teams)
    return teams

def generate_teams_random(no_of_teams, items, teams):
    '''
        this function arranges members into different teams
        items - array of items to arrange into teams
    '''
    '''[] for x in range(no_of_teams)'''
    random.shuffle(items)
    if(len(items) == 0):
        print("no items")
        return teams
    for team in range(no_of_teams):
        if(items == []):
            return teams
        if(len(teams) != no_of_teams):
            teams.append([items.pop()])
        else:
            i = no_of_teams
            if i != 0:
                for team in teams:
                    if(items == []):
                        return teams
                    team.append(items.pop())
                    i = i - 1
    generate_teams_random(no_of_teams, items, teams)
    return teams
