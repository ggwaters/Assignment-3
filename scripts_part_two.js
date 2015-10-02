//The Rock, Paper, Scissors Game (10 points)

//Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:
//Rock destroys scissors.
//Scissors cut paper.
//Paper covers rock.
//Our code will break the game into 3 phases:
//User makes a choice. How will we collect the user’s choice?
//Computer makes a choice. How will we collect the computer’s choice?
//A conditional that determines who wins.
//In this lab you will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path: 
//Begin by prompting the user for their choice.
//Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
//Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
//Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
//What if the result ends in a tie? Figure out how to handle that as well.
//What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
//
//var compThrow = Math.random();
////var rock = (compThrow <= 0.3);
////var paper = (compThrow > 0.3 && compThrow <= 0.6);
////var scissors = (compThrow > 0.6);
//
////window.console.log(compThrow);
//
//var start = window.confirm("How about a game of Rochambeau?!? \nThat's Rock, Paper, Scissors for the uninitiated.");
//if (start === true) {
//    var toss = window.prompt("Okies Dokies.\nChoose your throw between, rock, paper, or scissors.");
//} else {
//    var toss = window.prompt("That was a trap. You have to play anyhoo.\nChoose your throw between, rock, paper, or scissors.");
//}
//
//function again() {
//    var toss = window.prompt("Choose your throw between, rock, paper, or scissors.");
//    compThrow = Math.random();
//}
//
////window.console.log(compThrow);
//
//function rochambeau() {    
//    switch (toss) {
//    case "rock":
//        if (compThrow <= 0.3) {
//            window.alert("You threw rock as did I. Throw again");
//            again();
//        } else if (compThrow > 0.3 && compThrow <= 0.6) {
//            window.alert("You threw rock. I threw paper. Paper wraps up rock, sucka.");
//        } else {
//            window.alert("You threw rock. I threw scissors. Rock smashes scissors.");                
//        }
//        break;
//    case "paper":
//        if (compThrow > 0.3 && compThrow <= 0.6) {
//            window.alert("You threw paper as did I. Throw again");
//            again();
//        } else if (compThrow <= 0.3) {
//            window.alert("You threw paper. I threw rock. Paper wraps up rock.");
//        } else {
//            window.alert("You threw paper. I threw scissors. Scissors slices paper, sucka.");                
//        }
//        break;
//    case "scissors":
//        if (compThrow > 0.6) {
//            window.alert("You threw scissors as did I. Throw again");
//            again();
//        } else if (compThrow > 0.3 && compThrow <= 0.6) {
//            window.alert("You threw scissors. I threw paper. Scissors go slicey, slicey.");
//        } else {
//            window.alert("You threw paper. I threw rock. Paper covers rock ... in shame");                
//        }
//        break;
//    default:
//        window.alert("I don't know what that gesture is but I am sure it is rude somewhere.");
//        again();    
//    }
//}
//
//rochambeau();
//
//function play() {
//    var replay = window.confirm("Shall we play again?");
//    if (replay === true) {
//        var toss = window.prompt("Best of luck.\nChoose your throw between, rock, paper, or scissors.");
//        rochambeau();
//    } else {
//        window.alert("Thanks for playing");
//    }
//}
//
//play();


//The Basic Calculator (10 points)

//In this part of the assignment you will build a simple calculator. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this lab follow the steps outlined here:

//Prompt the user for a number and store that in a variable.

//Prompt the user for a second number and store that in a variable.

//Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.

//Create a new named function called calculate() that accepts 3 parameters.

//Call the calculate function and pass in the 3 variables as parameters. 

//HINT: You will need to convert the 2 numbers from strings to numbers. 

//Within the calculate() function use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation, and display the result within an alert box.

//Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more.


//Death by JavaScript (4 points each for 20 points total)

//Solve the following function/array-related problems. Each solution should be written within its own function and the output should be displayed within a console window. The display should be the return value of the function call.

//Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.
//

//Sample Data and Output
//Example string: 'webmaster' 
//Expected Output: 'abeemrstw'
//
//
//function flip() {
//    var input = window.prompt("Type in a word and I will flip it.");
////    var flop = input.reverse();
//    window.console.log(input.reverse());
//}
//
//flip();

//Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.
//
//Sample Data and Output
//Example string: 'the quick brown fox' 
 //Expected Output: 'The Quick Brown Fox'
//
//Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.
//
//Sample Data and Output
//Example string: 'The quick brown fox' 
//Expected Output: 5
//

//Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.
//
//Sample Data and Output
//Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
//

//Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.
//
//Sample Data and Output
//Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output: "United States of America"