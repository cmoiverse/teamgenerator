# TeamGenerator
This program will be used to arrange members of the department
    into sub-units equally (for now) and randomly
    For example,
    Given A, B, C, D, E, F,G
    If you want to have 2 teams based on this you would get [A, B, C] & [D, E, F, G]
    in one scenario and [A, D, F] and [B, C, E, G]
    3 teams e.g. [A, B], [C, D], [E, F, G]

TODO - Make a GUI for the app, web-based probably

Currently web app just displays team members
Currently only able to update web app display through manually updating the database

On downloading the app make sure you have django installed then do ->
$ python manage.py runserver in the terminal
In the browser type in localhost:8000/team to see results

https://docs.djangoproject.com/en/2.0/intro/tutorial01/
