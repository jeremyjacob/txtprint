/*eslint-env browser*/
document.querySelectorAll('.updateOuter').forEach(function(element, index) {
  var delay = index/18;
  element.setAttribute("style", "animation-delay: "+ delay +"s;");
});
function textFocus() {
  document.querySelector('#textStatus').classList.add('lowered');
}