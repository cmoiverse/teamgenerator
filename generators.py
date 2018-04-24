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
    # if(is_empty(items)):
    #     print("no items")
    #     return teams
        
    for team in range(no_of_teams):
        # if there are no items don't continue
        if(is_empty(items)):
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
    generate_teams(no_of_teams, items, teams)
    return teams

def generate_teams_random(no_of_teams, items, teams):
    '''
        this function arranges members into different teams
        items - array of items to arrange into teams in a randomized order
    '''
    removeSpaces(items)
    random.shuffle(items)
    shuffled_team = generate_teams(no_of_teams, items, teams)
    return shuffled_team

def is_empty_using_len(items):
    return (len(items) == 0)

def is_empty(items):
    return (items == [])

def removeSpaces(items):
    for item in items:
        items.remove(item)
    return items
