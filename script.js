
var _ = require('lodash');
console.log(_);
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const h3 =  document.querySelector('#h3');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

const setBackground = ()=> {
	 document.body.style.background = 
	`linear-gradient(to right, ${color1.value} , ${color2.value})`;
	 h3.textContent = document.body.style.background;
	};

setBackground();

color1.addEventListener('input',setBackground);
color2.addEventListener('input',setBackground);

button.addEventListener('click', function(e) {

	color1.value = `#${Math.floor(Math.random()*16777215).toString(16)}` ;
	color2.value = `#${Math.floor(Math.random()*16777215).toString(16)}` ;
	
	
	setBackground();

});

		

