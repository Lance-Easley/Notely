# Notely

This is my Spring Unit Project for Base Camp Coding Academy.
It is built off of an idea that my partner and I had during our [Java Unit Project](https://github.com/BaseCampCoding/Seth-and-Lance-Unit-5-Project), named "Muscially".
We were adding default music sheets for ghost play, the feature that played the piano for you, and wondered if we could have users submit their own sheets.
Since that project lacked a back-end, it would not be easily possible to store users and their sheets.
With Spring, I can have a back-end, so I decided to run with that idea.

## Comparisons

While both projects have the basic piano and ghostplay, each project has it's own attractions. 
Muscially has a drumkit and the legendary sheeshano, as well as faster loading times because there's no back-end to spin up.

Notely, on the otherhand, has a user system, allowing users to create sheets and view sheets that other people made. 
It does take longer to load, since the project is hosted on heroku's free dyno.

## Usage

First, navigate to the [site](https://notelymusic.herokuapp.com/).
You will be greeted by the homepage, where you can log in or sign up.
After logging in, you will see the piano and ghost play.

On each of the piano keys, you will see letters and symbols that correspond to keys on the keyboard.
Type the letter/symbol on a key to play it.
You can also click on a key to play it.
For the ghost play, you type the keys you want it to play.
To the right, you will see a timings guide.
This shows you the special characters that ghost play looks for to space out or play notes together.

If you create a piece in ghostplay that you want to save, press the `Make Into Sheet` button. 
This will take you to the Create Sheet page, with the text of your piece autofilled.
Specify the title and whether or not you want the sheet to be public.
If left unchecked, only you will be able to see the sheet.
Otherwise, everyone else will be able to see the sheet.
Once done, press `Create Sheet` to save it.

To view all ghostplay sheets, press `Ghostlay Sheets` in the navbar.
Alternatively, after you create a sheet, there will be a link to view all sheets.
This page will show you all of the public sheets, as well as your private ones.
Clicking on one of them will take you to the sheet's detail page. 
Here you will see the title, author, and ghostplay text. 
Below, you will also see `Play this Sheet`.
This link will take you back to the main page with the text of the sheet put into ghostplay.

To view all of the users, press the `View Artists` button on the navbar. 
Here you will see a list of all the users in a similar format to the ghostplay sheets.
Clicking on a user will show you all the public sheets that user has created. 
If you click on your own user, you will also see your private sheets.
