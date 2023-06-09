const readlineSync = require("readline-sync");


function findMinMax(array) {
    let min = array[0];
    let max = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
  
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    return { min, max };
  }
  
  const array = [5, 8, 2, 4, 1, 9, 3];
  const result = findMinMax(array);
  
  console.log("Array:", array);
  console.log("Minimum:", result.min);
  console.log("Maximum:", result.max);
  

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

const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Entrez un nombre n : "));
let sum = 0;

for (let i = 0; i < n; i++) {
  let number = parseFloat(readlineSync.question(`Entrez le nombre ${i + 1} : `));
  sum += number;
}

console.log("La somme des nombres est :", sum);
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

let favoriteNumber;

while (favoriteNumber !== 42) {
  favoriteNumber = readlineSync.question("Quel est votre nombre préféré ? ");

  if (favoriteNumber !== '42') {
    console.log("Êtes-vous sûr ?");
  }
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


