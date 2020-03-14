// Your code goes here
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function(event) {
  event.target.style.fontSize = "5rem";
  event.target.style.color = "blue";
});

logo.addEventListener("mouseout", function(event) {
  event.target.style.fontSize = "4rem";
  event.target.style.color = "black";
});
