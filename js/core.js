// Nav
function openNav() {
  var side = document.getElementById("mySidenav");
  if (side.style.width == "200px") {
    side.style.width = "0px";
  } else {
    side.style.width = "200px";
  }
}
// Lang selector
var language;
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "/language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
}
