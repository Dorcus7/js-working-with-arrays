// FOR ALL EXERCISES WHERE YOU WORK WITH AN ARRAY, PRINT THE RESULTS AT EACH STEP!

/********************** Exercise 1 **********************/

// Go to a website of your choosing (a news site or a shopping site). Find examples of data that might be stored as arrays. Provide a description of the data below. 


// we can use all methodes used in class;

// include; 
// increase quantity;
// identify;
// Perform;
// etc


/********************** Exercise 2 **********************/
// Create an array of books to be sold in an online store. 
let book1 = "rich kid";
let book2 = "balerina";
let book3 ="indigo";
let book4 =" fruit";

const books = ["Book 1", "Book 2", "Book 3"];


/********************** Exercise 3 **********************/
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

console.log(shopping[0]);


// For the above array, log the string "bread" to the consol



// After the following code is run, what will happen? Console log the new array.
shopping[0] = "rice";
console.log(shopping);

//Log the value at index 2. Note that it is NOT the second value! Why is that?

//Answer: because index starts from 0



// Try changing the value "cheese" to "vegetables" using an index.
shopping[2] = "Vegetables";
console.log(shopping);

//console.log(shopping[2]);  Logs "vegetables"



// Log the last value WITHOUT using a set number. That is, do NOT write: `shopping[4]`. You can use the `.length` to figure out what the last index is!

console.log(shopping.length-1);

// Now write the same code in the square brackets, using the `.length` property to calculate the last index, only with the `gems` array below instead of `shopping`. The solution should give you the last value in ANY array!

const gems = ["ruby", "saphhire", "pearl", "steven", "amethyst", "garnet", "lapis lazuli", "peridot"]

console.log(gems.length-1);


/********************** Exercise 4 **********************/

const cities = ["Oakland", "New York"];


// Use an array method to add Memphis to the END of the array.

cities.push("Memphis");

// Use an array method to add Phoenix to the END of the array.
cities.push("Phoenix");

// Use an array method to add Atlanta to the START of the array.
cities.unshift("Atlanta");
// Use an array method to add Chicago and Denver to the END of the array with one method call.

cities.push("Chicago","Denver");

// Use an array method to remove the FIRST element of the array.

cities.shift();

// Use an array method to remove the LAST element of the array.
cities.pop();

// Log the final array to the console. It should look like this: ["Oakland", "New York", "Memphis", "Phoenix", "Chicago"]

console.log(cities);

/********************** Exercise 5 **********************/

const colors = ["red", "green", "blue", "yellow"];

// Use the slice method on the above array to produce the following array: ["red", "green", "blue"]
const sliced1 = colors.slice(0, 3);
console.log(sliced1);

// Now use the slice method to produce the following array: ["green", "blue", "yellow"]

const sliced2 = colors.slice(1, 4);
console.log(sliced2); 

// Next use the slice method to produce the following array: ["red", "green"]


const sliced3 = colors.slice(0, 2);
console.log(sliced3);


/********************** Exercise 6 **********************/

const numbers = [5, 1, 8, 3, 2, 7, 4, 6, 9];

// Sort the array in ascending order

numbers.sort((a, b) => a - b);
console.log(numbers);




/********************** Exercise 7 **********************/
// The following array contains data about a user. How would you log the string 'Python' to the console?
const userMember = ["Dava Sorbel", 795, ['Python', 'JavaScript', 'Ruby']];

// How would you use that array to find the letter J? Remeconst userMember = ["Dava Sorbel", 795, ['Pythonmber that you can use indexes with arrays AND strings!


console.log(userMember[2][0]); 

const skills = userMember[2].join(', ');

console.log(skills);


/********************** Exercise 8 **********************/

const cityString = "Detroit,Atlanta,Birmingham,New Haven,Dallas,San Diego,Portland";

// Now let's split the array at each comma. How would you create an array with each of the cities as a separate value?

const cityArray = cityString.split(',');
console.log(cityArray);

// What is the length of the new array?

console.log(cityArray.length);

// Log the array to the console

console.log(cityArray[cityArray.length - 1]);

// How would you log the last city in the array to the console?

const citiesWithSpaces = cityArray.join(', ');

// Using the .join() method, how would you turn the list of cities back into a string with spaces after the commas?

console.log(citiesWithSpaces);


/********************** Exercise 9 **********************/


let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.

const myArray = myString.split('+');

// Store the length of the array in a variable called arrayLength.

const arrayLength = myArray.length;

// Store the last item in the array in a variable called lastItem.

const lastItem = myArray[arrayLength - 1];


// Remove the last item in the array.

myArray.pop();

// Add two new names to the end of the array.

myArray.push("Dorcus", "Nagadya");

console.log(arrayLength);
console.log(lastItem);
