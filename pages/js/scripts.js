/*eslint-env browser*/
//// Defines ////
var typeset = document.getElementById("typeset");
var updates = document.getElementById("updates");
var faq = document.getElementById("faq");
var code = document.getElementById("code");
var about = document.getElementById("about");
var box = document.getElementById("text");
var charCount = document.getElementById("charCount");
var charDisplay = document.getElementById("charDisplay");
var typing = document.querySelector('#textStatus');
var topbar = document.querySelector('.topbar');
var scrollNav = window.scrollTop;
var char = true;
var boxCol = 34;

//// Expanding textbox & counting chars and words ////
box.setAttribute('style', 'height:' + (box.scrollHeight) + 'px;overflow-y:hidden;');
box.addEventListener("input", OnInput, false);

function OnInput() {
  localStorage.setItem('typeText', box.value);
  // document.cookie = "typeText="+box.value+"; expires=Thu, 31 Dec 2037 12:00:00 UTC";localStorage.getItem('typeText');
  typing.innerHTML = "typing";
  if (char === true) {charCount.innerHTML = box.value.length;if (box.value.length == 1) {charDisplay.innerHTML = "character"} else {charDisplay.innerHTML = "characters"}} 
  else {charCount.innerHTML = realWordCount();}
  
  box.style.height = 'auto';
  box.style.height = (box.scrollHeight) + 'px';
}

document.addEventListener("DOMContentLoaded", function(event) {document.body.classList.add("loaded");});

//// Modal Def ////
var m = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
m.setContent('<h1>Formatting</h1><br><h2>Bold:</h2><p>*bold*</p><h2>Underline:</h2><p>_underline_</p><h2>Inverse:</h2><p>+inverse+</p><h2>Double Height:</h2><p>$double height&</p><h2>Center Justified:</h2><p>:center justified:</p><h2>Right Justified:</h2><p>&gtright justified&gt</p><h2>Medium:</h2><p>&medium&</p><h2>Large:</h2><p>#large#</p><h2>Barcode:</h2><p>q(bc(number,format)</p>');


//// Mobile code ////
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
  
  var abSubtexts = document.querySelectorAll('#abSubtext');
  abSubtexts.forEach(function(abSubtexts) {
    abSubtexts.style.width = "85%";
  });
  
  boxCol = screen.width / 12.2;
  box.setAttribute("cols", boxCol);
  console.log("Mobile");
}

if (window.location.hash !== '' ) { 
  setPage(window.location.hash.substr(1));
  history.replaceState({}, document.title, "."); 
}

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

function version(v) {
  console.log('%c'+v, 'color: black; font-weight: bold;');
}

//// setPage code for dynamically changing the page content basic on url hashes ////
setPage(window.location.pathname);
function setPage(page) {
  document.cookie = "location="+page;
  switch (page) {
    case "#updates":
      displayNone();
      updates.style.display = "block";
      document.title = "txtprint // updates";
      break;
    case "#faq":
      displayNone();
      faq.style.display = "block";
      document.title = "txtprint // FAQ";
      break;
    case "#code":
      displayNone();
      code.style.display = "block";
      document.title = "txtprint // code";
      break;
    case "#about":
      displayNone();
      about.style.display = "block";
      document.title = "txtprint // about";
      break;
    default:
      displayNone();
      typeset.style.display = "block";
      document.title = "txtprint // typeset";
      break;
  }
}

window.onpopstate = function(e){
    setPage(window.location.pathname);
};



function displayNone() {
  typeset.style.display = "none";
  updates.style.display = "none";
  faq.style.display = "none";
  code.style.display = "none";
  about.style.display = "none";
}

function countMode () {
  if (char === true) {
    char = false;
    charCount.innerHTML = realWordCount();
    charDisplay.title = "Click for character count";
  } else {
    char = true;
    charCount.innerHTML = box.value.length;
    if (box.value.length == 1) {charDisplay.innerHTML = "character"} else {charDisplay.innerHTML = "characters"}
    charDisplay.title = "Click for word count";
  }
}
function realWordCount() {
  if (box.value.trim().split(/\s+/).length == 1 && box.value.length > 0) {charDisplay.innerHTML = "word";}
  else {charDisplay.innerHTML = "words";}
  if (box.value.length < 1) {return 0;}
  else {return box.value.trim().split(/\s+/).length;}
}

window.addEventListener('scroll', function() {
        scrollNav = window.scrollY;
        if (scrollNav > 0) {
          topbar.classList.add("active");
        } else {
          topbar.classList.remove("active");
        }
});



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


var updateList = document.getElementById('updateList');
fetch("data/updates.json")
  .then(res => res.json())
  .then(function(data) {
    for (var i=data.length-1;i >= 0;i--) {
      var update = data[i];
      var udtmpl = document.getElementById('update-template').content.cloneNode(true);
      udtmpl.querySelector('.updateOuter').id = ('week'+update.week);
      udtmpl.querySelector('.updateInner').innerText = update.date;
      udtmpl.querySelector('.updateW').innerText = ('week '+update.week);
      udtmpl.querySelector('.updateP').innerHTML = (update.body);
      updateList.appendChild(udtmpl);
    }})
  .catch((error) => {
    alert('Loading updates from JSON failed. Try using https://txtprint.us');
    console.log(error);
  }); 


