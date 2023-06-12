'use strict'

/////////////////////////////////Javascript////////////////////////////////////////////////////////////////////
let x = 10 + 5; //15
x += 10; // x=x+15 , 25
// console.log(x);

//
let markWeight = 78;
let markHeight = 1.69;
let JohnWeight = 92;
let JohnHeight = 1.95;

let marks = markWeight / markHeight ** 2;
let Johns = JohnWeight / JohnHeight ** 2;

if (marks > Johns) {
  //console.log(`Marks BMI ${marks} is higher than Johns `);
} else {
  //console.log(`Johns BMI ${Johns} is higher than Marks `);
}

//Type Conversion
let b = "25";
let c = Number(b);
// console.log(10 + Number(b));

//type coersion ----- automatically converts strings to numbers when it sees operators
// console.log("I am " + 25 + " years old");
// console.log("23" - "10" - 3); //10 ---------- means it converted strings to number
// console.log("23" + "10" + 3); //10 ---------- Plus sign is used to concatenate
let n = "1" + 1;
n = n - 1;
// console.log(n);

//== and === && and ||

const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 123) / 3;
if (dolphins > koalas && dolphins >= 100) {
  // console.log("Dolphin wins");
} else if (koalas > dolphins && koalas >= 100) {
  //console.log("Koala wins");
} else if (koalas == dolphins) {
  // console.log("Its draw");
}

// const str = "this is expression";
// the above line is statement. (returns some result means this is a expression)

// let tip = 15;
// let bill = 100;
// const bills = [125, 555, 44];
// let tipCalc = bill * (tip / 100);
// // {`${bill >= 300 || bill <= 50 } ? The bill was ${bill}, the tip was ${tipCalc} the total value is: ${bill+tipCalc} : "" `}

// function calcTip(bills) {
//   return bills <= 300 && bills >= 50 ? bill * 0.15 : bills * 0.2;
// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// const result =
//   bill <= 300 || bill >= 50
//     ? ` The bill was ${bill} and tip is ${tipCalc} and your bill is ${
//         tipCalc + bill
//       } `
//     : bill + 0.2;
// console.log(result);
//

// 'use strict';

let driversLicence = false;
let pass = true;
if (pass) driversLicence = true;

// Functions
function juiceProducer(apple, orange) {
  const juice = `Juice of ${apple} apples and ${orange} oranges.`;
  // return juice;
}

// console.log(juiceProducer(4, 5));

function age(ageYear) {
  return 2023 - ageYear;
}
// console.log(age(1997));

//Arrow function
const ageCalc = (ageYear) => 2023 - ageYear;
// console.log(ageCalc(1997));

function cutPieces(fruit) {
  return fruit * 4;
}
function juiceProducer(apple, orange) {
  const applePiece = cutPieces(apple);
  const orangePiece = cutPieces(orange);
  // return `Juice of ${applePiece} Pieces of apple and ${orangePiece} pieces of orange`;
}
// console.log(juiceProducer(4, 2));

//func challenge
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const averageDolphin = calcAverage(85, 54, 41);
const averageKoala = calcAverage(23, 34, 27);

// console.log("Average Score", averageDolphin, averageKoala);

function checkWinner(averageDolphin, averageKoala) {
  if (averageDolphin >= averageKoala * 2) {
    // console.log(`Dolphin wins ${averageDolphin} vs. ${averageKoala} `);
  } else if (averageKoala >= averageDolphin * 2) {
    // console.log(`Koala wins ${averageDolphin} vs. ${averageKoala} `);
  } else {
    // console.log("No Team Wins :(");
  }
}

checkWinner(averageDolphin, averageKoala);
checkWinner(576, 111);

// Array

const friends = ["Sara", "Anum", "Zara"];
friends[2] = "Sanum";
// console.log(friends);

// Objects *****************************************************************************************************
// BMI = mass / (height * height); (BMI formula)
const johnsmith = {
  name: "Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const markKiller = {
  name: "Mark Killer",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// console.log(`Mass of John Smith is: ${johnsmith.calcBMI()}`);
// console.log(`Mass of Mark Killer is: ${markKiller.calcBMI()}`);

// Loop ************************************************************************************************************

// const dataOfStudent= {
//   name: 'Sara',
//   batch: '1503b',
//   degree: 'pass',
//   marks: [50, 60, 80]
// }

const dataOfStudent = ["Sara", "1503b", "pass", [50, 60, 80]];

// for (let i = 0; i <= dataOfStudent.length ; i++) {
//   // console.log("Student Data", dataOfStudent[i]);
//   // console.log("Student Data",  typeof dataOfStudent[i]);
// }

const years = [1997, 1996, 1993, 2000];
const ages = [];

// for(let i = 0; i < years.length; i++){
//  ages.push(2023 -years[i])
// }

// console.log(ages) ;

// for(let i = 1; i < 4; i++)
//   {
//     // console.log(`Excercise Number ${i}`);
//     for(let j = 1; j < 6; j++ ){
//     // console.log(`Excercise Number  ${i}.${j}`);

//     }
//   }

// While ************************************************************************************************************

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
// console.log("You rolled a " , dice);
// }

// challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i = 1; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
// console.log("Tips" , tips, "Bills" ,bills, "totals", totals);

function calcAverage1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// console.log("Average is: ", calcAverage1(totals));

// DOM ************************************************************************************************************
document.querySelector(".number").textContent = 50;
document.querySelector(".score").textContent = 200;


// functionssss
let number = Math.trunc(Math.random()*20) + 1;
document.querySelector(".random").textContent = number
document.querySelector(".check").addEventListener("click", function(){
  const inputTxt = Number(document.querySelector(".inputText").value);
  if(!inputTxt){
    console.log(inputTxt);
    document.querySelector(".card-title").textContent = "No Number";
  }
  else if(inputTxt === number){
  document.querySelector(".card-title").textContent = "Correct Number";
  }
  else if(inputTxt > number){
    document.querySelector(".card-title").textContent = "Number is High";
    }
    else if(inputTxt < number){
      document.querySelector(".card-title").textContent = "Number is Low";
      }
})



document.querySelector('.again').addEventListener("click", function(){
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  number = Math.trunc(Math.random()*20) + 1;
  document.querySelector("body").style.backgroundColor = "pink";
  document.querySelector(".inputText").style.width = "15rem"


})





// Modal********************************************************************************************************

const openModal = document.querySelectorAll(".openModal");
const closeModal = document.querySelector(".closeModal");
const hidden = document.querySelector(".hidden");
const modal = document.querySelector(".modal")
const modaltitle = document.querySelector(".modal-title")
const overlay = document.querySelector(".overlay")

const openModalFunc = function(){
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeModalFunc = function(){
  overlay.classList.add("hidden");
  modal.classList.add("hidden")
}

for(let i = 0; i < 3; i++){
    openModal[i].addEventListener("click", openModalFunc)
}


closeModal.addEventListener("click", closeModalFunc)
overlay.addEventListener("click", closeModalFunc)
closeModal.addEventListener("click", closeModalFunc)









































/////////////////////////////////Javascript////////////////////////////////////////////////////////////////////
