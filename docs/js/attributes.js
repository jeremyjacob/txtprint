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

document.addEventListener("keydown", function(event) {
  code = event.code;
  switch(code) {
    case "Escape":
    break;  
    default:
      break;
}});

function toggleconnect() {
    console.log('yeye');
    if (port) {
      location.reload();
    } else {
      serial.requestPort().then(selectedPort => {
        port = selectedPort;
        connect();
      }).catch(error => {
        
        console.log('Connection error: ' + error);
      });
    }
    

}