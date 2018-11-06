var content = document.getElementById("content");
var typeset = document.getElementById("typeset");
var updates = document.getElementById("updates");
var docs = document.getElementById("docs")
var about = document.getElementById("about");
var observe;

setPage(0);
if (window.location.hash.substring(1) === "") {window.location.hash = 'typeset';}

if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
function setPage() {
  page = window.location.hash.substring(1);
  switch (page) {
    case "updates":
      typeset.style.display = "none";
      updates.style.display = "block";
      docs.style.display = "none";
      about.style.display = "none";
      document.title = "txtprint // updates"
      break;
    case "docs":
      typeset.style.display = "none";
      updates.style.display = "none";
      docs.style.display = "block";
      about.style.display = "none";
      document.title = "txtprint // docs"
      break;
    case "about":
      typeset.style.display = "none";
      updates.style.display = "none";
      docs.style.display = "none";
      about.style.display = "block";
      document.title = "txtprint // about"
      break;
    default:
      typeset.style.display = "block";
      updates.style.display = "none";
      docs.style.display = "none";
      about.style.display = "none";
      document.title = "txtprint // typeset"
      break;
  }
}
function init () {
    var text = document.getElementById('text');
    function resize () {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    observe(text, 'change',  resize);
    observe(text, 'cut',     delayedResize);
    observe(text, 'paste',   delayedResize);
    observe(text, 'drop',    delayedResize);
    observe(text, 'keydown', delayedResize);

    text.focus();
    text.select();
    resize();
    
}
