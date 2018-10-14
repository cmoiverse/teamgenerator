import unittest
import generators
# Here's our "unit"

SPACE = ' '
EMPTY_TEAM = []
MEMBERS = ['Gloria', 'Craig', 'Ose', 'Shalom', 'Aaron', 'Ehi', 'Jada']
NUMBER_OF_TEAMS = 3

# Here's our "unit tests".
class GeneratorsTests(unittest.TestCase):
    def test_size(self):
        teams = generators.generate_teams_random(NUMBER_OF_TEAMS, MEMBERS, EMPTY_TEAM)
        team = teams[0]
        self.assertNotEqual(team, [])
        self.assertEqual(len(teams),NUMBER_OF_TEAMS)
    def test_if_there_are_are_any_teams(self):
        teams = generators.generate_teams_random(NUMBER_OF_TEAMS, [SPACE], EMPTY_TEAM)
        print(teams)
        self.assertEqual(len(teams), 0)
    def test_if_there_are_spaces(self):
        MEMBERS.append(SPACE)
        print(MEMBERS)
        teams = generators.generate_teams_random(NUMBER_OF_TEAMS, MEMBERS, EMPTY_TEAM)
        for team in teams:
            print(team)
            for member in team:
                self.assertNotEqual(member, 'SPACE')
    def test_no_duplicates(self):
        MEMBERS.extend(MEMBERS)
        teams = generators.generate_teams_random(NUMBER_OF_TEAMS, MEMBERS, EMPTY_TEAM)
        self.assertEqual(len(teams), 3)
        pass
        

def main():
    unittest.main()

if __name__ == '__main__':
    main()