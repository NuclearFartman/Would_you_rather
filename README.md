Installation:
-Standard npm install and npm start

Login:
-You can login by clicking in anywhere in the frame border(not the picture or name) at localhost:xxxx/login
-You can log out by clicking on the picture on the upper right side on every other screen than the login screen
-After login the home page is shown

Home: 
- the home page is located at localhost:xxxx (you have to be logged in)
- at the top there is the Nav-bar with links to navigate the app
- After the heading ("Home Page") there is a toggle button. With this you can switch between answered and unanswered 
	questions. Unanswered is default.
- Below are the user specific questions for the selected category.
- You can click on the questions to get to the Questions-Details page.
- On the upper right side there is a picture and the name of the logged in user
- the questions are sorted so that the most recently quetions are on top

Questions-Details:
-this page is located at http://localhost:xxxx/questions/:question_id
-You see a picture of the user who posted this question, the text "Would you rather" and two options.
-Again you see a Nav-bar and the logged user
-For answered questions you see:
	-The text: "This Question is answered"
	-The two options
	-How many people voted for this option and the percentage
	-Which option the logged in user selected
	
New polls:
-this page is located at http://localhost:xxxx/add
-You see the text: "Would you rather"
-You have two textfields for either option
-You have a submit button
-After clicking the submit button you are redirected to the home page

Leaderboard:
-this page is located at http://localhost:xxxx/leaderboard
-Each entry has the picture and name of the user, the number of the asked and answered questions
-the entries are sorted in descending order based on asked + answered questions

Nav-bar:
-available on all pages except the login page


