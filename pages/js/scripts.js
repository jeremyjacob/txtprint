var typeset = document.getElementById("typeset")
  , updates = document.getElementById("updates")
  , faq = document.getElementById("faq")
  , code = document.getElementById("code")
  , about = document.getElementById("about")
  , box = document.getElementById("text")
  , charCount = document.getElementById("charCount")
  , charDisplay = document.getElementById("charDisplay")
  , typing = document.querySelector("#textStatus")
  , topbar = document.querySelector(".topbar")
  , tsTitle = document.querySelector("#tsTitle")
  , scrollNav = window.scrollTop
  , char = !0
  , boxCol = 34;
box.setAttribute("style", "height:" + box.scrollHeight + "px;overflow-y:hidden;");
box.addEventListener("input", OnInput, !1);
function OnInput() {
    localStorage.setItem("typeText", box.value);
    typing.innerHTML = "typing";
    !0 === char ? (charCount.innerHTML = box.value.length,
    charDisplay.innerHTML = 1 == box.value.length ? "character" : "characters") : charCount.innerHTML = realWordCount();
    var a = box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length;
    box.rows = Math.max(box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length, 9);
    9 < a && (box.style.height = "auto");
}
document.addEventListener("DOMContentLoaded", function(a) {
    document.body.classList.add("loaded");
    setPage(window.location.href.split('/')[3]);
});
"";
var isChromium = window.chrome
  , winNav = window.navigator
  , vendorName = winNav.vendor
  , isOpera = "undefined" !== typeof window.opr
  , isIEedge = -1 < winNav.userAgent.indexOf("Edge");
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
    switch (a) {
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
        typeset.style.display = "block",
        document.title = "txtprint";
        history.replaceState("", document.title, window.location.pathname);
    }
}
function getPositionY(element) {
    var yPosition = 0;
    while (element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    return yPosition;
}
function countMode() {
    !0 === char ? (char = !1,
    charCount.innerHTML = realWordCount(),
    charDisplay.title = "Click for character count") : (char = !0,
    charCount.innerHTML = box.value.length,
    charDisplay.innerHTML = 1 == box.value.length ? "character" : "characters",
    charDisplay.title = "Click for word count");
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
    function setWindowHeight() {
        if (window.innerWidth < 600) {
            box.style.width = "85vw";
        } else {
            box.style.width = "530px";
        }
    }
    setWindowHeight();
    window.addEventListener("resize", setWindowHeight);
    box.style.height = "200px";
    box.style.minHeight = "200px;";
    box.style.height = 210 < box.scrollHeight ? "auto" : "200px";
    box.value = localStorage.getItem("typeText");
    !0 === char ? (charCount.innerHTML = box.value.length,
    charDisplay.innerHTML = 1 == box.value.length ? "character" : "characters") : charCount.innerHTML = realWordCount();
    var a = box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length;
    box.rows = Math.max(box.value.substr(0, box.selectionStart).split(/\r?\n|\r/).length, 9);
    9 < a && (box.style.height = "auto");
}
const updateList = document.getElementById("updateList");
fetch("data/updates.json").then(function(a) {
    return a.json();
}).then(function(a) {
    for (var d = a.length - 1; 0 <= d; d--) {
        var c = a[d]
          , b = document.getElementById("update-template").content.cloneNode(!0);
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
var typeRecurse = 0;
function typePlaceholder() {
  if (localStorage.getItem("typeText")) {var a = "Continue writing..."} else {var a = "Write something...";}
  typeRecurse < a.length && (box.placeholder += a.charAt(typeRecurse), typeRecurse++, setTimeout(typePlaceholder, 30));
}
setTimeout(function() {
  typePlaceholder();
}, 200);


var titleRecurse = 0;
tsTitle.innerHTML = "txt"
function titleAnimIn() {
  var b = 'print';
  titleRecurse < b.length && (tsTitle.innerHTML += b.charAt(titleRecurse), titleRecurse++, setTimeout(titleAnimIn, 30));
}
titleAnimIn();
