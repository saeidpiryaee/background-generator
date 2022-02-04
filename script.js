var _ = require('lodash');
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
console.log(_);
var array = [1,2,3,4,5,6,7,8];
console.log("The answer is : ", _.without(array,3));

color1.addEventListener("input", function(){
  changeBackground();
})

color2.addEventListener("input", function(){
  changeBackground();
})


function changeBackground(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}