'use strict';


/// Define a function called 'userInput' to get valid answers for questions 1-5 and standardize answers: Y/y=> yes; N/n=> no
function userInput(question){

  var answer = prompt(question);

  //If not valid answer, prompt and allow enter again
  while (!(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no'|| answer.toLowerCase() === 'y'||answer.toLowerCase() === 'n')){
    answer = prompt('Answer again with Yes/Y/No/N.');
  }
  // Y/y => yes
  if (answer.toLowerCase() ==='y'){
    answer = 'yes';
  }
  // N/n => no
  if(answer.toLowerCase()==='n'){
    answer ='no';
  }
  return answer.toLowerCase();
}

//Define a function called 'connectHtml' to update contents in HTML
function connectHtml(htmlId, jsVar){
  var el = document.getElementById(htmlId);
  el.textContent = jsVar;

}


///Create serveral arrays for questions 1 -7 to store questions, alerts when answer correct, alerts when answer wrong, correct answers, user's answers, results, html id.
var questionList = ['Was I born in US?','Do I make a living as a dog walker?','Do I have a dgree in Information Systems?','Do I like Visual Basic?','Do I want to be a software engineer?','Guess what is my lucky number from 1 to 10. You have 4 opportunities to guess.','Can you guess a country I visited except for US? You have 6 opportunies to guess.'];

var alertCorrectList =['You are right! I am a Chinese girl!','You are right! I love dogs but am not a professional dog walker.','Yup. I got a degree in Information Systems about 7 years ago.','You are right! I am not a VB fan and likes JavaScirpt better!','Of course! Software Engineer is an awesome job!','Yes, you are right!','Yup, you guess right!'];

var alertWrongList =['Ops. You guess wrong. I am from a far away country.','You guess wrong! I am actually a tax analyst dealing with numbers.','Wrong answer! I am smarter than you think :)','You guess wrong. I do like VB becuase the language is too outdated!','Wrong! I want to be a software engineer and is working on that:)','Wrong answer!','Wrong guess!'];

var randomNumber = Math.floor(1 + Math.random()*10);
var correctAnswerList = ['no','no','yes','no','yes',randomNumber,['japan','china','canada']];
var userAnswerList = new Array(7);
var resultList =new Array(7);

var htmlAnswerId =['answer1','answer2','answer3','answer4','answer5','answer6','answer7'];
var htmlResultId =['result1','result2','result3','result4','result5','result6','result7'];

///for Question 1 to Question 5
//Define a function to deal with questions 1 to 5
function fiveQuestions (question, userAnswer, correctAnswer, correctMessage, wrongMessage, result, htmlAnswerId, htmlResultId) {

  userAnswer = userInput (question);
  if (userAnswer === correctAnswer) {
    alert(correctMessage);
    result = 'correct';
  } else {
    alert (wrongMessage);
    result = 'wrong';
  }

  console.log('For the question: ' + question + ' => User answer is ' + userAnswer + '.');

  connectHtml(htmlAnswerId, userAnswer);
  connectHtml(htmlResultId, result);

  return result;
}


//Using a loop to call the function 'fiveQuestion'
for (var i = 0; i < 5; i++){

  resultList[i] = fiveQuestions (questionList[i], userAnswerList[i], correctAnswerList[i], alertCorrectList[i], alertWrongList[i], resultList[i], htmlAnswerId[i], htmlResultId[i]);

}

///for Question 6 - Guess what my lucky number is from 1 to 10. You have 4 opportunities to guess:

userAnswerList[5] = prompt(questionList[5]);
resultList[5] ='wrong';

//give user 4 opportunies to guess the correct number

for (var j = 0; j < 4; j++){
// check the validation of the answer for question 6 (must be a number)
  var number = parseInt(userAnswerList[5]); //input answer is always string, should translate to a number

  while (isNaN(number)){
    number = prompt('Not a number. Please type in a number.');
  }

  //if last question and still not get correct
  if(j ===3 && number !== correctAnswerList[5]){
    alert('Time out! You did not get it correct.');
  }
  //if get it correct
  else if (number === correctAnswerList[5]){
    alert(alertCorrectList[5]);
    resultList[5]='correct';
    break;
  }
  //if not last quesiton and user number is too low
  else if (number < correctAnswerList[5]){
    userAnswerList[5] = prompt(alertWrongList[5] + ' Too low. Guess higher.');
  }
  //if not last question and user number is too high
  else {
    userAnswerList[5] = prompt(alertWrongList[5] + ' Too high. Guess lower.');
  }
}

alert('Did you get it correct? My lucky number is ' + correctAnswerList[5] +'.');

console.log('For the question: ' + questionList[5] + ' => User answer is ' + userAnswerList[5] + '.');

connectHtml(htmlAnswerId[5], userAnswerList[5]);
connectHtml(htmlResultId[5], resultList[5]);


///for Question 7 - Can you guess a country I visited except for US? You have 6 opportunies to guess.

resultList[6] = 'wrong';
userAnswerList[6] = prompt(questionList[6]);

//give user 6 opportunies to guess the correct number
for(var k = 0; k < 6; k++){

  //if last quesiton and still did not get correct:
  if (k===5 && correctAnswerList[6].includes(userAnswerList[6].toLowerCase())=== false){
    alert('Time out! You did not get it correct :(');
  }
  //if user answer one correct answer:
  else if (correctAnswerList[6].includes(userAnswerList[6].toLowerCase())=== true){
    alert(alertCorrectList[6]);
    resultList[6] = 'correct';
    break;
  }
  //if not last question and user get it wrong:
  else{
    userAnswerList[6] = prompt(alertWrongList[6]);
  }
}
alert('I have been to Japan, China, and Canada so far.');

console.log('For the question: ' + questionList[6] + ' => User answer is ' + userAnswerList[6] + '.');

connectHtml(htmlAnswerId[6], userAnswerList[6]);
connectHtml(htmlResultId[6], resultList[6]);


///Count total correct answers

var countCorrect =0;
for (var m = 0; m <resultList.length; m++){
  if (resultList[m] === 'correct'){
    countCorrect++;
  }
}

console.log('result list is:');
console.log(resultList);
console.log('Test Result: ' + countCorrect + ' correct answers out of ' + resultList.length);

alert('You got ' + countCorrect + ' out of 7 questions correct!');

connectHtml('count', countCorrect);



