onst myAge = 24;
// variabila earlyYears cu valoarea 2
let earlyYears = 2; // se inmulteste si devine 21
earlyYears *= 10.5; 
//am scazut la 2 si laterYears devine 22
let laterYears = myAge - 2;  // 22
//am inmultit la 4 si laterYears devine 88
laterYears *= 4; //88
console.log(earlyYears); //21
console.log(laterYears); //88
//
let myAgeInDogYears = earlyYears + laterYears; //109

const myName = 'Gabriela Harea'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
