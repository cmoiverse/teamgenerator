import generators

def interactive():
    members_in_string_format = input('List out users separated by spaces\n')
    # Possibly clean up string before moving on to next step
    # https://stackoverflow.com/questions/22187233/how-to-delete-all-instances-of-a-character-in-a-string-in-python
    members = members_in_string_format.split(" ")
    number_of_teams = input('How many teams would you like\n')
    teams = []
    teams = generators.generate_teams_random(int(number_of_teams), members, teams)
    print(teams)

def main():
    interactive()

main()
