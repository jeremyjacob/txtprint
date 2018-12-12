/*eslint-env browser*/
/*eslint no-unused-vars: "error"*/

//document.querySelectorAll('.updateOuter').forEach(function(element, index) {
//  var delay = index/18;
//  element.setAttribute("style", "animation-delay: "+ delay +"s;");
//});

function textFocus() {
  document.querySelectorAll('sInput').forEach(function(sInputs) {
  sInputs.classList.add('lowered');
  });
}