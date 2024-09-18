# Project realted to DOM

# project-link
[Click here](https://stackblitz.com/edit/akram-dom-project?file=index.html)

# Solution Code

## Project 1

``` Javascript

const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");
buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    // sol1
    body.style.backgroundColor=e.target.id;

    // sol2
    // const color=e.target.id
    // switch(color){
    //   case "grey": body.style.backgroundColor=e.target.id;
    //   break;
    //   case "white": body.style.backgroundColor=e.target.id;
    //   break;
    //   case "blue": body.style.backgroundColor=e.target.id;
    //   break;
    //   case "yellow": body.style.backgroundColor=e.target.id;
    //   break;
    //   case "purple": body.style.backgroundColor=e.target.id;
    //   break;
    // }

  })
})

```

### Project 2

``` Javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === ' ' || height < 0 || isNaN(height)) {
    result.innerText = 'Please give valid Height';
  } else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    result.innerText = 'Please give valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI Index is : ${bmi}</span>`;
  }
});

```

### Project 3

``` Javascript

const clock=document.getElementById("clock");

setInterval(function(){
  let myDate=new Date();
  clock.innerHTML=myDate.toLocaleTimeString(); 
},1000);

```

### Project 4

``` Javascript

let guesssingNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');
const prevGuesses = document.querySelector('.guesses');
const remGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultPara = document.querySelector('.resultParas');

const p = document.createElement('p');

let arrprevGuesses = [];
let numGuesses = 0;

let playGame = true;

if (playGame) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Enter Valid Number');
  } else if (guess > 100) {
    alert('Enter less than 100 Number');
  } else if (guess < 1) {
    alert('Enter greater than 1 Number');
  } else {
    arrprevGuesses.push(guess);
    if (numGuesses === 9) {
      displayGuess(guess);
      displayMessage(`Game Over ! Random number was ${guesssingNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === guesssingNumber) {
    displayMessage(`You Guessed it right`);
    endGame();
  } else if (guess > guesssingNumber) {
    displayMessage(`Number is too high`);
  } else if (guess < guesssingNumber) {
    displayMessage(`Number is too Low`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  prevGuesses.innerHTML += `${guess}, `;
  numGuesses++;
  remGuesses.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultPara.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    guesssingNumber = parseInt(Math.random() * 100 + 1);
    arrprevGuesses = [];
    numGuesses = 0;
    prevGuesses.innerHTML = '';
    remGuesses.innerHTML = `${10 - numGuesses}`;
    userInput.removeAttribute('disabled', '');
    lowOrHi.innerHTML = ``;
    resultPara.removeChild(p);

    playGame = true;
  });
}

```

### Project 5

``` Javascript

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div>
  <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key == ' ' ? 'space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
  </table>
  </div>
  `;
});


```

### Project 6

``` Javascript


const randomColor=function(){
  const hexNum="0123456789ABCDEF";
  let color="#";
  
  for(let i=0; i<6; i++){
    color+=hexNum[Math.floor(Math.random()*16)];
  }
  return color;
}
let stopChange;
startChaningColor= function(){
  changeColor=function(){
    document.querySelector("body").style.backgroundColor=randomColor();
  }
  if(!stopChange){
    stopChange=setInterval(changeColor,1000);
  }
  
}
stopChangingColor=function(){
  clearInterval(stopChange);
  stopChange=null;
}
const start=document.getElementById("start").addEventListener('click',startChaningColor);
const stop=document.getElementById("stop").addEventListener('click',stopChangingColor);

```

