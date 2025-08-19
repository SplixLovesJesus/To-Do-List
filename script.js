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
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  cards.appendChild(span);
  cards.addEventListener("click", function(e) {
}, false)
  if(input.value === "") {
    alert("You must write something!");
    card.removeChild(cards);
}
  input.value = "";
  saveData();
})

card.addEventListener("click", function(e) {
if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData()
})

function saveData() {
  localStorage.setItem("data", card.innerHTML);
}
function showData() {
  card.innerHTML = localStorage.getItem("data");
}
showData();
