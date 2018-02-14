import generators

def main():
    '''Main Function'''
    members = ['Gloria', 'Craig', 'Ose', 'Shalom', 'Aaron']
    teams = []
    teams = generators.generate_teams(3, members, teams)
    print(teams)

main()
