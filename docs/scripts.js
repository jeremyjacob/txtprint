//// Defines ////
let content = document.getElementById("content");
let typeset = document.getElementById("typeset");
let updates = document.getElementById("updates");
let docs = document.getElementById("docs");
let docHome = document.getElementById("about");
let about = document.getElementById("about");
let box = document.getElementById("text");
let charCount = document.getElementById("charCount");
let charDisplay = document.getElementById("charDisplay");
let typing = document.querySelector('#textStatus');
var char = true;
var boxCol = 34;
var observe, page;

//// Load cookie ////
if (document.cookie.split('=')[1] != null) {
  document.addEventListener('DOMContentLoaded', event => {
    box.value = document.cookie.split('=')[1];
  });
}

//// Mobile code ////
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  
  var abSubtexts = document.querySelectorAll('#abSubtext');
  abSubtexts.forEach(function(abSubtexts) {
    abSubtexts.style.width = "85%";
    console.log(abSubtexts);
  })
  
  boxCol = screen.width / 12.2;
  box.setAttribute("cols", boxCol);
  console.log("Mobile");
}

//// Default to #typset ////
setPage(0);
if (window.location.hash.substring(1) === "") {window.location.hash = 'typeset';}

//// Test if client is Chrome ////
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;

if(
  isChromium !== null &&
  typeof isChromium !== "undefined" &&
  vendorName === "Google Inc." &&
  isOpera === false &&
  isIEedge === false
) {
   // is Google Chrome, all good
} else { 
   // not Google Chrome, warning
   alert ("This page was designed for a modern version Google Chrome. You may try to use it on another browser, but it may not work as intended.");
}

//// setPage code for dynamically changing the page content basic on url hashes ////
function setPage() {
  page = window.location.hash.substring(1);
  switch (page) {
    case "updates":
      displayNone();
      updates.style.display = "block";
      document.title = "txtprint // updates"
      break;
    case "docs":
      displayNone();
      docs.style.display = "block";
      document.title = "txtprint // docs"
      break;
    case "about":
      displayNone();
      about.style.display = "block";
      document.title = "txtprint // about"
      break;
    default:
      window.location.hash = 'typeset';
      displayNone();
      typeset.style.display = "block";
      document.title = "txtprint // typeset"
      break;
  }
}

function displayNone() {
  typeset.style.display = "none";
  updates.style.display = "none";
  docs.style.display = "none";
  about.style.display = "none";
}



//// Expanding textbox & counting chars and words ////
box.setAttribute('style', 'height:' + (box.scrollHeight) + 'px;overflow-y:hidden;');
box.addEventListener("input", OnInput, false);

function OnInput() {
  document.cookie = "typeText="+box.value+"; expires=Thu, 31 Dec 2037 12:00:00 UTC";document.cookie.split('=')[1];
    typing.innerHTML = "typing";
  if (char === true) {charCount.innerHTML = box.value.length;if (box.value.length == 1) {charDisplay.innerHTML = "character"} else {charDisplay.innerHTML = "characters"}} 
  else {charCount.innerHTML = realWordCount();}
  
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}


function countMode () {
  if (char === true) {
    char = false;
    charCount.innerHTML = realWordCount();
    charDisplay.title = "Click for character count"
  } else {
    char = true;
    charCount.innerHTML = box.value.length;
    if (box.value.length == 1) {charDisplay.innerHTML = "character"} else {charDisplay.innerHTML = "characters"}
    charDisplay.title = "Click for word count"
  }
}
function realWordCount() {
  if (box.value.trim().split(/\s+/).length == 1 && box.value.length > 0) {charDisplay.innerHTML = "word";}
  else {charDisplay.innerHTML = "words";}
  if (box.value.length < 1) {return 0;}
  else {return box.value.trim().split(/\s+/).length;}
}


//// DOCS CODE ////
function setDocPage(page) {
  
}
