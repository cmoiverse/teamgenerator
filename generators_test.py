import unittest
import generators
# Here's our "unit"

SPACE = ' '
EMPTY_TEAM = []

def test_generate_number_of_teams (number):
    members = ['Gloria', 'Craig', 'Ose', 'Shalom', 'Aaron', 'Ehi', 'Jada']
    teams = generators.generate_teams_random(number, members, EMPTY_TEAM)
    return teams

def test_generate_number_of_teams_with_spaces(number):
    members = ['Gloria', 'Craig', 'Ose', 'Aaron', 'Ehi', 'Jada', SPACE]
    teams = []
    teams = generators.generate_teams_random(number, members, EMPTY_TEAM)
    return teams

# Here's our "unit tests".
class GeneratorsTests(unittest.TestCase):
    def testSize(self):
        teams = test_generate_number_of_teams(3)
        self.assertEqual(len(teams),3)
    def testSpace(self):
        teams = test_generate_number_of_teams_with_spaces(3)
        for team in teams:
            for member in team:
                self.assertNotEqual(member, 'SPACE')



def main():
    unittest.main()

if __name__ == '__main__':
    main()