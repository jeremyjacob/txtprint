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
var observe, page;

//// Load cookie ////
if (document.cookie.split('=')[1] !== "undefined") {
  document.addEventListener('DOMContentLoaded', event => {
    box.value = document.cookie.split('=')[1];
  });
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
