'use strict';



//Q1: Was Yang born in US?
var bornInUs = prompt('Was Yang born in US?');
bornInUs = bornInUs.toLowerCase();
var firstResult = 'correct';

if (bornInUs === 'yes' || bornInUs === 'y' ){
  alert('Ops. You guess wrong. She is from a far away country.');
  firstResult = 'wrong';
}
else{
  alert('You are right! Yang is a Chinese girl!');
}

console.log('For the question: "Was Yang born in US?" => User answer is ' + bornInUs + '.');

var elFirstAnswer = document.getElementById('answer1');
elFirstAnswer.textContent = bornInUs;

var elFirstResult = document.getElementById('result1');
elFirstResult.textContent = firstResult;





//Q2: Does Yang make a living as a dog walker?
var isDogWalker = prompt('Does Yang make a living as a dog walker?');
isDogWalker = isDogWalker.toLowerCase();
var secondResult = 'correct';

if (isDogWalker === 'yes' || isDogWalker === 'y'){
  alert('You guess wrong! She is actually a tax analyst dealing with numbers.');
  secondResult = 'wrong';
}
else{
  alert('You are right! She loves dogs but is not a professional dog walker.');
}

console.log('For the question: "Does Yang make a living as a dog walker?" => User answer is ' + isDogWalker + '.');

var elSecondAnswer = document.getElementById('answer2');
elSecondAnswer.textContent = isDogWalker;

var elSecondResult = document.getElementById('result2');
elSecondResult.textContent = secondResult;




//Q3: Does Yang have a dgree in Information Systems?
var degreeInfoSys = prompt('Does Yang have a dgree in Information Systems?');
degreeInfoSys = degreeInfoSys.toLowerCase();
var thirdResult = 'correct';

if (degreeInfoSys === 'yes'|| degreeInfoSys === 'y'){
  alert('Yup. She got a degree in Information Systems about 7 years ago.');
}
else{
  alert('Wrong answer! Yang is smarter than you think :)');
  thirdResult ='wrong';
}

console.log('For the question: "Does Yang have a dgree in Information Systems?" => User answer is ' + degreeInfoSys + '.');

var elThirdAnswer = document.getElementById('answer3');
elThirdAnswer.textContent = degreeInfoSys;

var elThirdResult = document.getElementById('result3');
elThirdResult.textContent = thirdResult;





//Q4: Does Yang like Visual Basics?
var likesVisualBasics = prompt('Does Yang like Visual Basics?');
likesVisualBasics = likesVisualBasics.toLowerCase();
var fourthResult = 'correct';

if (likesVisualBasics === 'yes'|| likesVisualBasics === 'y'){
  alert('You guess wrong. She does not like VB becuase the language is too old!');
  fourthResult ='wrong';
}
else{
  alert('You are right! She is not a VB fan and likes JavaScirpt better!');
}

console.log('For the question: "Does Yang like Visual Basics?" => User answer is ' + likesVisualBasics + '.');

var elFourthAnswer = document.getElementById('answer4');
elFourthAnswer.textContent = likesVisualBasics;

var elFourthResult = document.getElementById('result4');
elFourthResult.textContent = fourthResult;





//Q5: Does Yang want to be a software engineer?
var beSoftwareEngineer = prompt('Does Yang want to be a software engineer?');
beSoftwareEngineer = beSoftwareEngineer.toLowerCase();
var fifthResult = 'correct';

if (beSoftwareEngineer === 'yes'|| beSoftwareEngineer === 'y'){
  alert('Of course! Software Engineer is an awesome job!');
}
else{
  alert('Wrong! She wants to be a software engineer and is working on that:)');
  fifthResult = 'wrong';
}

console.log('For the question: "Does Yang want to be a software engineer?" => User answer is ' + beSoftwareEngineer + '.');

var elFifthAnswer = document.getElementById('answer5');
elFifthAnswer.textContent = beSoftwareEngineer;

var elFifthResult = document.getElementById('result5');
elFifthResult.textContent = fifthResult;
