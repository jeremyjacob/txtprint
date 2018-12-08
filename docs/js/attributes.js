function a(element, attribute, value){q(element).forEach(function(item){item.setAttribute(attribute, value);});} 
function q(selector){return document.querySelector(selector);}
//// ------------ /////
var updateCards = document.querySelectorAll('.updateOuter');

// var cards = updateCards.length;
// var i = 1;

// (function next() {
//     if (i++ > cards) return;
//     setTimeout(function() {
//         console.log(i);
//         next();
//     }, 200);
// })();


