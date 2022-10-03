const preStage = document.getElementById("preStage");
const postStage = document.getElementById("postStage");
const starIcon = document.getElementById("starIcon");
const starDiv = document.querySelector(".star");
const h1 = document.getElementById("h1");
const description = document.getElementById("desc");
const rating1 = document.getElementById("one");
const rating2 = document.getElementById("two");
const rating3 = document.getElementById("three");
const rating4 = document.getElementById("four");
const rating5 = document.getElementById("five");
const submitBtn = document.getElementById("button");
const rates = document.getElementById("rated");
let rating = 0;

rating1.addEventListener("click", () => {
  rating1.style.backgroundColor = "#fc7612";
  rating1.style.color = "#ffd699";
  rating = 1;
});

rating2.addEventListener("click", () => {
  rating2.style.backgroundColor = "#fc7612";
  rating2.style.color = "#ffd699";
  rating = 2;
});

rating3.addEventListener("click", () => {
  rating3.style.backgroundColor = "#fc7612";
  rating3.style.color = "#ffd699";
  rating = 3;
});

rating4.addEventListener("click", () => {
  rating4.style.backgroundColor = "#fc7612";
  rating4.style.color = "#ffd699";
  rating = 4;
});

rating5.addEventListener("click", () => {
  rating5.style.backgroundColor = "#fc7612";
  rating5.style.color = "#ffd699";
  rating = 5;
});

submitBtn.addEventListener("click", () => {
  preStage.style.display = "none";
  postStage.style.display = "flex";
  rates.textContent = "You selected " + rating + " out of 5";
});
