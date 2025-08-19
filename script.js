const container = document.querySelector("#container");
const header = document.querySelector("#header");
const card = document.querySelector("#card")
const button = document.querySelector("#enter-button");
const input = document.querySelector("#searchbar");

button.addEventListener("click", function() {
  const cards = document.createElement("div");
  const para = document.createElement("p");
  card.appendChild(cards);
  cards.appendChild(para);
  cards.className = "cards";
  para.textContent = input.value;
})

