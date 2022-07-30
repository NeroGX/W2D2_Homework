////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
       console.log(i); 
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    else {
        console.log(i);
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

console.log(plantee);
plantee[2]++;
console.log(plantee);
console.log(wolfy);
wolfy[3] = "Gotham City";
console.log(wolfy);
console.log(dart);
dart.push('Hawkins');
console.log(dart);
wolfy.shift();
wolfy.unshift('Gameboy');
console.log(wolfy);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']  // Dev note: Raphael is the best!! No counter-arguments
for (const element of ninjaTurtles) {
    console.log(element.toUpperCase());
}
////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);
//favMovies.sort();
//console.log(favMovies);  // It will alter the array by sorting the array.
 favMovies.pop();
 favMovies.push('Guardians of the Galaxy');
//console.log(favMovies);
// favMovies.shift();
// favMovies.shift();
// favMovies.shift();
// favMovies.shift();
// favMovies.shift();
// console.log(favMovies);
// favMovies.unshift(); // unshift doesn't return anything since there is nothing in the argument.
//console.log(favMovies);
let djIndex = favMovies.indexOf('Django Unchained');
favMovies.splice(djIndex, 1, 'Avatar');  // splice will permanently alter the array
console.log(favMovies);
let middleIndex = Math.ceil(favMovies.length / 2);
const halfFavMovies = favMovies.slice(middleIndex - 1); // slice does not mutate the array
console.log(halfFavMovies);
console.log(favMovies.indexOf('Fast and Furious')); // value is -1.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1])
////////////////////////////////
//  Excited Kitten
////////////////////////////////

const catTalk = ['Hooman,... why are you taking pictures of me.', 'No, leave me alone.', '...the catnip made me do it...', '...why does the red dot always get away...', '...oooh, the hand is warm']
for (let i = 1; i <= 20; i++) {
    let randomNum = Math.floor(Math.random() * catTalk.length);
    if (i % 2 === 0) {
        console.log(catTalk[randomNum]);
    } 
    else {
        console.log('Love me, pet me! HSSSSSS!');
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums);
let median = Math.ceil(nums.length / 2);
console.log(nums[median]);