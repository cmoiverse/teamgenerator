import unittest
import generators
# Here's our "unit".


def generate_number_of_teams (number):
    members = ['Gloria', 'Craig', 'Ose', 'Shalom', 'Aaron', 'Ehi', 'Jada']
    teams = []
    teams = generators.generate_teams_random(number, members, teams)
    return teams

# Here's our "unit tests".
class GeneratorsTests(unittest.TestCase):

    def testSize(self):
        self.failUnlessEqual(len(generate_number_of_teams(3)),3)

def main():
    unittest.main()

if __name__ == '__main__':
    main()