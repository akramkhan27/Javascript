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
  })
})

