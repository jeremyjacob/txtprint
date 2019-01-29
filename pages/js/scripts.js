var typeset = document.getElementById("typeset"), updates = document.getElementById("updates"), faq = document.getElementById("faq"), code = document.getElementById("code"), about = document.getElementById("about"), box = document.getElementById("text"), charCount = document.getElementById("charCount"), charDisplay = document.getElementById("charDisplay"), typing = document.querySelector("#textStatus"), topbar = document.querySelector(".topbar"), scrollNav = window.scrollTop, char = !0, boxCol = 
34;
box.setAttribute("style", "height:" + box.scrollHeight + "px;overflow-y:hidden;");
box.addEventListener("input", OnInput, !1);
function OnInput() {
  localStorage.setItem("typeText", box.value);
  typing.innerHTML = "typing";
  !0 === char ? (charCount.innerHTML = box.value.length, charDisplay.innerHTML = 1 == box.value.length ? "character" : "characters") : charCount.innerHTML = realWordCount();
  var a = box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length;
  box.rows = Math.max(box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length, 9);
  9 < a && (box.style.height = "auto");
}
document.addEventListener("DOMContentLoaded", function(a) {
  document.body.classList.add("loaded");
  setPage(window.location.hash);
});
var m = new tingle.modal({footer:!0, stickyFooter:!1, closeMethods:["overlay", "escape"], closeLabel:"Close", cssClass:["custom-class-1", "custom-class-2"], beforeClose:function() {
  return !0;
}});
m.setContent("<h1>Formatting</h1><br><h2>Bold:</h2><p>*bold*</p><h2>Underline:</h2><p>_underline_</p><h2>Inverse:</h2><p>+inverse+</p><h2>Double Height:</h2><p>$double height&</p><h2>Center Justified:</h2><p>:center justified:</p><h2>Right Justified:</h2><p>&gtright justified&gt</p><h2>Medium:</h2><p>&medium&</p><h2>Large:</h2><p>#large#</p><h2>Barcode:</h2><p>q(bc(number,format)</p>");
"" !== window.location.hash && setPage(window.location.hash.substr(1));
var isChromium = window.chrome, winNav = window.navigator, vendorName = winNav.vendor, isOpera = "undefined" !== typeof window.opr, isIEedge = -1 < winNav.userAgent.indexOf("Edge");
null !== isChromium && "undefined" !== typeof isChromium && "Google Inc." === vendorName && !1 === isOpera && !1 === isIEedge || alert("This page was designed for a modern version Google Chrome. You may try to use it on another browser, but it may not work as intended.");
function version(a) {
  console.log("%c" + a, "color: black; font-weight: bold;");
}
function setPage(a) {
  typeset.style.display = "none";
  updates.style.display = "none";
  faq.style.display = "none";
  code.style.display = "none";
  about.style.display = "none";
  switch(a) {
    case "#updates":
      updates.style.display = "block";
      document.title = "txtprint // updates";
      break;
    case "#faq":
      faq.style.display = "block";
      document.title = "txtprint // FAQ";
      break;
    case "#code":
      code.style.display = "block";
      document.title = "txtprint // code";
      break;
    case "#about":
      about.style.display = "block";
      document.title = "txtprint // about";
      break;
    default:
      typeset.style.display = "block", document.title = "txtprint";
  }
}

function countMode() {
  !0 === char ? (char = !1, charCount.innerHTML = realWordCount(), charDisplay.title = "Click for character count") : (char = !0, charCount.innerHTML = box.value.length, charDisplay.innerHTML = 1 == box.value.length ? "character" : "characters", charDisplay.title = "Click for word count");
}
function realWordCount() {
  1 == box.value.trim().split(/\s+/).length && 0 < box.value.length ? charDisplay.innerHTML = "word" : charDisplay.innerHTML = "words";
  return 1 > box.value.length ? 0 : box.value.trim().split(/\s+/).length;
}
window.addEventListener("scroll", function() {
  scrollNav = window.scrollY;
  0 < scrollNav ? topbar.classList.add("active") : topbar.classList.remove("active");
});
function textFocus() {
  document.querySelectorAll("sInput").forEach(function(a) {
    a.classList.add("lowered");
    box.classList.add("lowered");
  });
  box.style.width = "530px";
  box.style.height = "200px";
  box.style.minHeight = "200px;";
  box.style.height = 210 < box.scrollHeight ? "auto" : "200px";
  box.value = localStorage.getItem("typeText");
  box.placeholder = "Write something...";
  !0 === char ? (charCount.innerHTML = box.value.length, charDisplay.innerHTML = 1 == box.value.length ? "character" : "characters") : charCount.innerHTML = realWordCount();
  var a = box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length;
  box.rows = Math.max(box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length, 9);
  9 < a && (box.style.height = "auto");
}
const updateList = document.getElementById("updateList");
fetch("data/updates.json").then(function(a) {
  return a.json();
}).then(function(a) {
  for (var d = a.length - 1; 0 <= d; d--) {
    var c = a[d], b = document.getElementById("update-template").content.cloneNode(!0);
    b.querySelector(".updateOuter").id = "week" + c.week;
    b.querySelector(".updateInner").innerText = c.date;
    b.querySelector(".updateW").innerText = "week " + c.week;
    b.querySelector(".updateP").innerHTML = c.body;
    updateList.appendChild(b);
  }
})["catch"](function(a) {
  alert("Loading updates from JSON failed. Try using https://txtprint.us");
  console.log(a);
});
var i = 0;
function typePlaceholder() {
  var a = "Write something...";
  "" != localStorage.getItem("typeText") && (a = "Continue writing...");
  i < a.length && (box.placeholder += a.charAt(i), i++, setTimeout(typePlaceholder, 30));
}
typePlaceholder();