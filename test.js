const readlineSync = require("readline-sync");

/* Exercice 6.4

class Personne {
  constructor(firstname, lastname) {
    this._firstname = firstname;
    this._lastname = lastname;
  }

  get name() {
    return `${this._firstname} ${this._lastname}`;
  }

  set name(fullname) {
    const [firstname, lastname] = fullname.split(" ");
    this._firstname = firstname;
    this._lastname = lastname;
  }
}

let personne = new Personne("John", "Doe");
console.log(personne.name); 

personne.name = "Jane Smith";
console.log(personne.name); 
console.log(personne); 


/* Exercice 6.3

class Animal {

constructor(name, greeting, species) {
  this.name = name;
  this.greeting = greeting;
  this.species = species;
}

sayHello() 
  { 
    return this.greeting + "! My name is " + this.name + ", and I am a " + this.species + "!";
  }
}

let Cat = new Animal ("Whiskers", "Meow", "Cat");
let Dog = new Animal ("Buddy", "Woof", "Dog");
let Parrot = new Animal ("Blue", "Coco", "Parrot");


console.log(Cat.sayHello());
console.log(Dog.sayHello());
console.log(Parrot.sayHello());
*/


/*
Exercice 6.2

class Person {
  constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
  }

  sayHello() {
      return `Hello, my name is ${this.firstname} ${this.lastname}!`;
  }
}

let human1 = new Person("John", "Doe");
let human2 = new Person("Thomas", "Gendebien");


console.log(human2.sayHello());
*/

/*
Exercice 6.1

class Cat {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}

let skitty = new Cat("Skitty", 9);
let pixel = new Cat("Pixel", 6);

console.log(skitty);
console.log(pixel);
*/

/* Exercice 5.2

let serieName = "";
let productionYear = "";
let castMembers = "";
let cast = [];
let TVSerie = {"name": serieName, "productionYear": productionYear, "cast": cast};


function askTVseries() {
  serieName = readlineSync.question("Can you please give me the name of your favorite tv show?");
  productionYear = readlineSync.question("Oh, that's avery good one ! What's de production year ?");

  function askCastMember() {
    let member = readlineSync.question("Nom d'un membre du casting (ou 'fin' pour terminer) : ")
      if (member.toLowerCase() === 'fin') {
      return;      
      } else {
        cast.push(member);
        askCastMember();
      }};


  askCastMember();


  console.log(JSON.stringify(TVSerie));

}
  
function randomizeCast(TVSerie) {
  const { name, year, cast } = TVSerie;
  const randomizedCast = [...cast].sort(() => Math.random() - 0.5);
  let altTVSerie = {"name": serieName, "productionYear": productionYear, "cast": randomizedCast};

   return  console.log(JSON.stringify(altTVSerie));
}

randomizeCast(TVSerie);
*/


/* Exercice 5.1


let serieName = "";
let productionYear = "";
let castMembers = "";
let cast = [];
let TVSerie = {"name": serieName, "productionYear": productionYear, "cast": cast};


function askTVseries() {
  serieName = readlineSync.question("Can you please give me the name of your favorite tv show?");
  productionYear = readlineSync.question("Oh, that's avery good one ! What's de production year ?");

  function askCastMember() {
    let member = readlineSync.question("Nom d'un membre du casting (ou 'fin' pour terminer) : ")
      if (member.toLowerCase() === 'fin') {
      return;      
      } else {
        cast.push(member);
        askCastMember();
      }};


  askCastMember();


  console.log(JSON.stringify(TVSerie));

}
  
askTVseries();
*/



/* Exercice 4.6

let arr = [];

function factorial(a) {
  for(i=1; i<=a; i++) {
    arr.push(i)
  }
  

let sum = 1;
let size = arr.length;

  for(let i = 0; i < size; i++) {
    sum *= arr[i]; 
  } 

  return console.log(sum);

}

factorial(8);

*/

/* Exercice 4.5

function calcDistance(pointA, pointB) {
  let [x1, y1] = pointA;
  let [x2, y2] = pointB;

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance.toFixed(2);

}

let pointA = [4, 3];
let pointB = [3, 4];

let distance = calcDistance(pointA, pointB);

console.log(distance); 
*/

/* Exercice 4.4

function rand10() {
  return Math.floor(Math.random() * 20) + 1;
}

let n = parseInt(readlineSync.question("Can you please give me a number ?"));

let arr = [];

for(let i=0; i < n; i++) {
  arr.push(rand10())
}

console.log(arr);

function average(arr) {

  let size = arr.length;
  let sum = 0;
  
  for(let i = 0; i < size; i++) {
    sum += arr[i]; 
  } 

  sum /= arr.length

  return console.log(sum);

} 

function min(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  return console.log(Math.min(...arr));
}

function max(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  return console.log(Math.max(...arr));
}

average(arr);

min(arr);

max(arr);

*/



/* Exercice 3.3

push() method

function duplicateArrayUsingPush(array) {
    let duplicate = [];
  
    for (let i = 0; i < array.length; i++) {
      duplicate.push(array[i]);
    }
  
    return duplicate;
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const duplicatedArray1 = duplicateArrayUsingPush(originalArray);
  
  console.log("Original array:", originalArray);
  console.log("Duplicated array (using push()):", duplicatedArray1);

  

slice() method

  function duplicateArrayUsingSlice(array) {
    return array.slice();
  }
  
  const duplicatedArray2 = duplicateArrayUsingSlice(originalArray);
  
  console.log("Duplicated array (using slice()):", duplicatedArray2);
  
  */


/* Exercices 3.2
let arr = [100, 101, 102]

let size = arr.length;
let sum = 0;

for(let i = 0; i < size; i++) {
  sum += arr[i]; 
} 

sum /= arr.length

console.log(sum);
*/



/* Exercice 3.1
let arr = [100, 101, 102]

let size = arr.length;
let sum = 0;

for(let i = 0; i < size; i++) {
  sum += arr[i]; 
} 

console.log(sum);

*/








/* Exercice 4.3

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}
 
function multiRand(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(rand10());
  }
  return result;
}

let quantity = parseInt(readlineSync.question("Enter the number of random numbers to generate:"));
let randomNumbers = multiRand(quantity);
console.log(randomNumbers);
*/


/* Exercice 4.2

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

let random = rand10();

console.log("The random number between 1 and 10 is: " + random + " !");
*/



/* Exercice 4.1

function calcularray (nombre1, nombre2) {
  return nombre1*nombre2;
}

let longueur = parseInt(readlineSync.question("Quelle est la longeur de ton rectangle ?"))
let largeur = parseInt(readlineSync.question("Et quelle en est la largeur ?"))

 let array = calcularray (longueur, largeur)

 console.log("Alors, l'air de ton rectangle est de : " + array + " !")
*/





/* Exercice 3.2

function calculateAverage(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    const average = sum / array.length;
    return average;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [100, 101, 102];
  
  console.log("Average of array1:", calculateAverage(array1));
  console.log("Average of array2:", calculateAverage(array2));
*/  



/* Exercice 3.1

function sumArrayElements(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [100, 101, 102];
  
  console.log("Sum of array1:", sumArrayElements(array1));
  console.log("Sum of array2:", sumArrayElements(array2));
  
  */



/* Exercice 2.8


let n = parseInt(readlineSync.question("Can you please give me a number ?"))
let sum = 0

for (let i = 0; i < n; i++) {
 let number = parseInt(readlineSync.question("Enter a new number !"))
  sum += number
}

console.log("La somme des " + n + " nombres que tu m'as donnés est : " + sum + " !")

*/

/* Exercice 2.7

let number = parseInt(readlineSync.question("Entrez un nombre entre 1 et 7 : "));

let day;

switch (number) {
  case 1:
    day = "lundi";
    break;
  case 2:
    day = "mardi";
    break;
  case 3:
    day = "mercredi";
    break;
  case 4:
    day = "jeudi";
    break;
  case 5:
    day = "vendredi";
    break;
  case 6:
    day = "samedi";
    break;
  case 7:
    day = "dimanche";
    break;
  default:
    console.log("Le nombre saisi n'est pas valide.");
    process.exit(1);
}

console.log("Le nombre", number, "correspond au jour de la semaine", day + ".");
*/


/* Exercice 2.6

let favoriteNumber = readlineSync.question("Quel est votre nombre préféré ? ");

while (favoriteNumber != "42") {
    console.log("Êtes-vous sûr ?");
    favoriteNumber = readlineSync.question("Quel est votre nombre préféré ? ");
  }

 console.log("Félicitations ! Vous avez choisi le nombre 42.");
*/


/* Exercice 2.5

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      let divisionResult = i / 2;
      console.log(`${i} divisé par 2 est égal à ${divisionResult}`);
    } else {
      let multiplicationResult = i * 3;
      console.log(`${i} multiplié par 3 est égal à ${multiplicationResult}`);
    }
  }

*/
  

/* Exercice 2.4

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      let divisionResult = i / 2;
      console.log(`${i} divisé par 2 est égal à ${divisionResult}`);
    } else {
      let multiplicationResult = i * 3;
      console.log(`${i} multiplié par 3 est égal à ${multiplicationResult}`);
    }
  }
*/



/* Exercice 2.3

let i = 1;

while (i <= 100) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  */



/* Exercice 2.2

let minAge = readlineSync.question("Entrez l'âge minimum : ");
let maxAge = readlineSync.question("Entrez l'âge maximum : ");
let currentAge = readlineSync.question("Entrez votre âge actuel : ");

if (minAge > maxAge) {
  console.log("Désolé, vous n'avez sans doute pas bien compris. L'âge minimum ne peut pas être supérieur à l'âge maximum.");
} else if (currentAge >= minAge && currentAge <= maxAge) {
  console.log("Votre âge est compris entre l'âge minimum et l'âge maximum.");
} else {
  console.log("Votre âge n'est pas compris entre l'âge minimum et l'âge maximum.");
}
*/



/* Exercice 2.1

let age = readlineSync.question("Entrez votre âge : ");

if (age >= 18) {
    console.log("Vous êtes majeur !") ;
}

else {
    console.log("Vous êtes mineur !") ;
}
*/


/* Exercice 1.6

let number1 = readlineSync.question('Please, give me a integer number.') ;

let number2 = readlineSync.question('Perfect! Now, can i get a second integer ?') ;

console.log('The rest of the integer division of the two numbers is : ' + number1%number2) ;
*/


/* Exercice 1.5

let number1 = readlineSync.question('Can you give me a number with a décimal part please?');
let integerPart = Math.floor(Number(number1));

let number2 = readlineSync.question('Thanks ! Can i get another one ?');

console.log("If we remove the decimal part of the first one and, then, we multiplicate both, the result is :" + (integerPart * number2)) ;
*/


/* Exercice 1.4

let userName = readlineSync.question('Can you give me your name please?');

let city = readlineSync.question('and what about the place you live?');
console.log("Hello " + userName + ", and you live in " + city + ", is that right ?") ;
*/


