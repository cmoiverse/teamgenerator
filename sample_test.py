import unittest
# Refer to this article
# http://www.onlamp.com/pub/a/python/2004/12/02/tdd_pyunit.html
# Here's our "unit".
def IsOdd(n):
    return n % 2 == 1

# Here's our "unit tests".
class IsOddTests(unittest.TestCase):

    def testOne(self):
        self.assertTrue(IsOdd(1))

    def testTwo(self):
        self.assertFalse(IsOdd(2))

def main():
    unittest.main()

if __name__ == '__main__':
    main()