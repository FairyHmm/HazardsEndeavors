function toggleCards() {
  var cards = document.getElementById("cards");
  cards.style.opacity = "1";
  cards.style.display = "grid";
  cards.style.pointerEvents = "auto";
  cards.style.transition = "opacity .2s";
}
