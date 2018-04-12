import generators
import timeit
def interactive():
    members_in_string_format = input('List out users separated by spaces\n')
    # Possibly clean up string before moving on to next step
    # https://stackoverflow.com/questions/22187233/how-to-delete-all-instances-of-a-character-in-a-string-in-python
    members = members_in_string_format.split(" ")
    number_of_teams = input('How many teams would you like\n')
    teams = []
    teams = generators.generate_teams_random(int(number_of_teams), members, teams)
    print(teams)

def speed(n):
    first = 0
    second = 0
    # n = 10
    for x in range(0,n):
        items = []
        start1 = timeit.timeit()
        if(items == []):
            pass
        end1 = timeit.timeit()

        items = []
        start0 = timeit.timeit()
        if(len(items) == 0):
            pass
        end0 = timeit.timeit()

        if (start1 - end1) > (start0 - end0):
            first += 1
        else :
            second += 1
            # first > second implies the first method is faster 
    return first > second

def main():
    n =1
    count1 = 0
    count2 = 0
    for x in range (0, 1000):
        if speed(n):
            count1 += 1
        else:
            count2 += 1
    if (count2 > count1) :
        print(str(count2) + " times len(items) == 0 is faster")
    else : 
        print (str(count1) + " times items == [] is faster")
    # interactive()

main()
