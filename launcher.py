import generators

def main():
    '''Main Function'''
    members = ['Gloria', 'Craig', 'Ose', 'Shalom', 'Aaron', 'Ehi', 'Jada']
    teams = []
    teams = generators.generate_teams_random(3, members, teams)
    print(teams)

main()
