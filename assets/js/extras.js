document.getElementById("LangTrigger").onclick = function() {ToggleLangMenu()};

function ToggleLangMenu() {
  var ToggleMenu = document.getElementById("LangSelect");
  
if (ToggleMenu.style.display === "block") {
    ToggleMenu.style.display = "none";
  } else {
    ToggleMenu.style.display = "block";
  }
}