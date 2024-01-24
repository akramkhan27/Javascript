# Project realted to DOM

# project-link
[Click here](https://akram-dom-project.stackblitz.io)

# Solution Code

## Project 1

``` Javascript

console.log("Akram Khan");

const buttons= document.querySelectorAll(".button");
const body= document.querySelector("body");

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    const backColor=e.target.id;

    switch(backColor){
      case 'grey': 
      body.style.backgroundColor=backColor;
      break;
      case 'white': 
      body.style.backgroundColor=backColor;
      break;
      case 'blue': 
      body.style.backgroundColor=backColor;
      break;
      case 'yellow': 
      body.style.backgroundColor=backColor;
      break;
      case 'purple': 
      body.style.backgroundColor=backColor;
    }
  });
});

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
