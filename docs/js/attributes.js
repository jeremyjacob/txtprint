/*eslint-env browser*/

//document.querySelectorAll('.updateOuter').forEach(function(element, index) {
//  var delay = index/18;
//  element.setAttribute("style", "animation-delay: "+ delay +"s;");
//});

function textFocus() {
  document.querySelectorAll('sInput').forEach(function(sInputs) {
  sInputs.classList.add('lowered');
  });
}
document.getElementById('history').onclick = function(){
    this.classList.remove('open');
}
document.getElementById('historyCard').onclick = function(){
    event.stopPropagation();
}
function scaleback(direction) {
  if (direction == 1) {document.querySelector('.topbar').classList.add('scaleback');}
  else if (direction == 0) {document.querySelector('.topbar').classList.remove('scaleback');}
}