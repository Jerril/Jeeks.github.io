//changing element/tag content
// var heading = document.querySelector('h1');

// heading.textContent = "This is Javascript in action";


//Applying functions
// function multiply(num1, num2) {
//     result = num1 + num2;
//     return result;
// }

// console.log(multiply(10, 20));
// console.log(multiply(5, 42));
// console.log(multiply(18, 32));

//Applying event to an element
// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }


//Getting and setting attribute
// var myImg = document.querySelector('img');

// myImg.onclick = function() {

//     var mySrc = this.getAttribute('src');

//     if (mySrc === 'images/01.jpeg') {
//         myImg.setAttribute('src', 'images/02.jpg');
//     } else {
//         myImg.setAttribute('src', 'images/01.jpeg');
//     }

// }

//Adding Personalized welcome messages
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please Enter your name.')
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Javascript is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Javascript is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}