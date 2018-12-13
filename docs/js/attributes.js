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
document.getElementById('history').onclick = function(){scaleback(0);};
document.getElementById('historyCard').onclick = function(){event.stopPropagation();};

function scaleback(direction) {
  if (direction == 1) {
    document.querySelector('#wrapper').classList.add('scaleback');
    document.querySelector('#history').classList.add('open');
  }
  else if (direction === 0) {
    document.querySelector('#wrapper').classList.remove('scaleback');
    document.querySelector('#history').classList.remove('open');
  }
}

document.addEventListener("keydown", function(event) {
  code = event.code;
  switch(code) {
    case "Escape":
      console.log("exut");
      document.querySelector('#wrapper').classList.remove('scaleback');
      document.querySelector('#history').classList.remove('open');
    break;  
    default:
    console.log("yeye");
      break;
}});