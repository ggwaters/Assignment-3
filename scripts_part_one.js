//Practice with Arrays (5 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:

// Step 1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//
//var movies = ["The Wall", "Hard Boiled", "Dawn of the Dead", "Blackhawk Down", "Flight 93"];
//window.console.log(movies[1]);


// Step 2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
//
//var movies = [];
//movies[0] = "Serenity";
//movies[1] = "Blazing Saddles";
//movies[2] = "History of the World";
//movies[3] = "The Secret Life of Walter Mitty";
//movies[4] = "Ran";
//window.console.log(movies[0]);


// Step 3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//
//var movies = [];
//movies[0] = "Serenity";
//movies[1] = "Blazing Saddles";
//movies[2] = "History of the World";
//movies[3] = "The Secret Life of Walter Mitty";
//movies[4] = "Ran";
//movies.splice(2, 0, "The Good, the Bad, and the Ugly");
//window.console.log(movies.length);
//window.console.log(movies);


// Step 4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//
//var movies = [];
//movies[0] = "Valley Girl";
//movies[1] = "Up in Smoke";
//movies[2] = "A World Without Thieves";
//movies[3] = "Lock, Stock, and Two Smoking Barrels";
//movies[4] = "Hot Dog";
//delete movies[0];
//window.console.log(movies);

// Step 5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
//
//var movies = [];
//movies[0] = "Hellsing";
//movies[1] = "Ghost in the Shell";
//movies[2] = "Cowboy Bebop";
//movies[3] = "Sword Art Online";
//movies[4] = "Desert Punk";
//movies[5] = "Gun Girl";
//movies[6] = "Battleship Yamato";
//
//for (var i = 0; i < movies.length; i++) {
//    window.console.log(movies[i]);
//}


// Step 6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
//
//var movies = [];
//movies[0] = "Beverly Hills Cop";
//movies[1] = "48 Hours";
//movies[2] = "Ghostbusters";
//movies[3] = "Bad News Bears";
//movies[4] = "Stripes";
//movies[5] = "Caddyshack";
//movies[6] = "Animal House";
//
//for (var x in movies) {
//    window.console.log(movies[x]);
//};

//7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
//
//var movies = [];
//movies[0] = "The Longest Day";
//movies[1] = "Patton";
//movies[2] = "Blackhawk Down";
//movies[3] = "The Green Berets";
//movies[4] = "A Bridge Too Far";
//movies[5] = "Kelly's Heroes";
//movies[6] = "Full Metal Jacket";
//alpha = movies.sort();
//
//for (var x in alpha) {
//    window.console.log(alpha[x]);
//}


//8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Star Wars: The Phantom Menace";
//leastFavMovies[1] = "Star Wars: The Clone Wars";
//leastFavMovies[2] = "Star Wars: Revenge of the Sith";
//
//var movies = [];
//movies[0] = "Star Wars: A New Hope";
//movies[1] = "Star Wars: The Empire Strikes Back";
//movies[2] = "Star Wars: The Return of the Jedi";
//movies[3] = "Star Wars: The Force Awakens";
//
//window.console.log("Movies I Like");
//window.console.log(" ");
//for (var x in movies) {
//    window.console.log(movies[x]);
//};
//window.console.log(" ");
//window.console.log("Movies I Regret Watching");
//window.console.log(" ");
//for (var x in leastFavMovies) {
//    window.console.log(leastFavMovies[x]);
//};


//9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Star Wars: The Phantom Menace";
//leastFavMovies[1] = "Star Wars: The Clone Wars";
//leastFavMovies[2] = "Star Wars: Revenge of the Sith";
//
//var movies = [];
//movies[0] = "Star Wars: A New Hope";
//movies[1] = "Star Wars: The Empire Strikes Back";
//movies[2] = "Star Wars: The Return of the Jedi";
//movies[3] = "Star Wars: The Force Awakens";
//
//var movies = movies.concat(leastFavMovies);
//alpha = movies.sort();
//reverse = alpha.reverse();
//
//for (var x in reverse) {
//    window.console.log(reverse[x]);
//}


//10.	Return just the last item in the array and display it within the console window.
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Star Wars: The Phantom Menace";
//leastFavMovies[1] = "Star Wars: The Clone Wars";
//leastFavMovies[2] = "Star Wars: Revenge of the Sith";
//
//var movies = [];
//movies[0] = "Star Wars: A New Hope";
//movies[1] = "Star Wars: The Empire Strikes Back";
//movies[2] = "Star Wars: The Return of the Jedi";
//movies[3] = "Star Wars: The Force Awakens";
//
//var movies = movies.concat(leastFavMovies);
//window.console.log(movies.pop());


// Step 11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Star Wars: The Phantom Menace";
//leastFavMovies[1] = "Star Wars: The Clone Wars";
//leastFavMovies[2] = "Star Wars: Revenge of the Sith";
//
//var movies = [];
//movies[0] = "Star Wars: A New Hope";
//movies[1] = "Star Wars: The Empire Strikes Back";
//movies[2] = "Star Wars: The Return of the Jedi";
//movies[3] = "Star Wars: The Force Awakens";
//
//var movies = movies.concat(leastFavMovies);
//window.console.log(movies.shift());


// Step 12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
//
//var leastFavMovies = [];
//leastFavMovies[0] = "Star Wars: The Phantom Menace";
//leastFavMovies[1] = "Star Wars: The Clone Wars";
//leastFavMovies[2] = "Star Wars: Revenge of the Sith";
//
//var movies = [];
//movies[0] = "Star Wars: A New Hope";
//movies[1] = "Star Wars: The Empire Strikes Back";
//movies[2] = "Star Wars: The Return of the Jedi";
//movies[3] = "Star Wars: The Force Awakens";
//
//var movies = movies.concat(leastFavMovies);
//var x = movies.indexOf("Star Wars: The Phantom Menace");
//var y = movies.indexOf("Star Wars: The Clone Wars");
//var z = movies.indexOf("Star Wars: Revenge of the Sith");
//movies[x] = "The Fifth Element";
//movies[y] = "Heavy Metal";
//movies[z] = "Battlestar Galactica";
//window.console.log(movies);


// Step 13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
//
//var employee1 = [];
//var employee2 = [];
//
//employee1["employeeid"] = 42;
//employee1["name"] = "Jet Black";
//employee1["title"] = "Space Cowboy";
//employee1["department"] = "Cowboy Bebop";
//employee1["current"] = true;
//
//employee2["employeeid"] = 57;
//employee2["name"] = "Spike Spiegel";
//employee2["title"] = "Space Cowboy";
//employee2["department"] = "Cowboy Bebop";
//employee2["current"] = true;
////
////var employees = employee1.concat(employee2);
////window.console.log(employees);
////var employees = employee1[employee1.length] = employee2;
////window.console.log(employees);
//
//var employees = employee1.push();
//var employees = employee2.push();
//window.console.log(employees[employee2["name"]]);


// Step 14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.


// Step 15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.


// Step 16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
//
//var movies = [["Stripes", 1], ["Meatballs", 2], ["Animal House", 3], ["Caddyshack", 4], ["Vacation", 5]];
////var movieTitles = movies.filter(function (item) {
////    return typeof item === "number";
////});
////window.console.log(movieTitles);
//
//for (var i = 0; i <= movies.length -1; i++) {
//    window.console.log(movies[i][0] + " " + movies[i][1]);
//};


// Practice with Functions (5 points)

// Step 1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
//
//function displayName(name) {
//    window.console.log("My name is " + name + ".");
//}
//displayName("Greg");


// Step 2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
//
//function calculate(num1, num2) {
//    window.console.log(num1 % num2);
//}
//calculate(4, 7);


// Step 3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
//
//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY
//
//var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
//function showEmployee() {
//    for (var x in employees) {
//        window.console.log(employees[x]);
//        };
//    };
//window.console.log("Employees:");
//window.console.log("");
//showEmployee();