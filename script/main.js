const divGrids = document.querySelector("#GridDraws");
const colorClasic = document.querySelector("div");
const inputSize = document.querySelector("#SizeSquare");
CreateSquareDiv();
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
divGrids.addEventListener("mouseover", function (event) {
  event.target.style.cssText = `background-color:black;margin:1px;`;
  divGrids.style.cssText = `grid-template-columns: repeat(${inputSize.value},1fr);grid-template-rows: repeat(${inputSize.value},1fr)`;
});
function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}
function RandomColorDiv1() {
  divGrids.addEventListener("mouseover", function (event) {
    event.target.style.cssText = `background-color:${randomColor()};margin:1px;`;
    divGrids.style.cssText = `grid-template-columns: repeat(${inputSize.value},1fr); grid-template-rows: repeat(${inputSize.value},1fr);`;
  });
}
function RandomColorDivBlack() {
  divGrids.addEventListener("mouseover", function (event) {
    event.target.style.cssText = `background-color:black;margin:1px;`;
    divGrids.style.cssText = `grid-template-columns: repeat(${inputSize.value},1fr);grid-template-rows: repeat(${inputSize.value},1fr);`;
  });
}
function RandomColorDivWhite() {
  divGrids.addEventListener("mouseover", function (event) {
    event.target.style.cssText = `background-color:white;margin:1px;`;
    divGrids.style.cssText = `grid-template-columns: repeat(${inputSize.value},1fr);grid-template-rows: repeat(${inputSize.value},1fr);`;
  });
}
function CreateSquareDiv() {
  divGrids.innerHTML = "";
  for (let A = 0; A < inputSize.value * inputSize.value; A++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("Div1");
    divGrids.appendChild(newDiv);
  }
  divGrids.style.cssText = `grid-template-columns: repeat(${inputSize.value},1fr);grid-template-rows: repeat(${inputSize.value},1fr);`;
  console.log(inputSize.value);
}
inputSize.addEventListener("change", CreateSquareDiv);
document.getElementById("Random").onclick = RandomColorDiv1;
document.getElementById("Black").onclick = RandomColorDivBlack;
document.getElementById("White").onclick = RandomColorDivWhite;
document.getElementById("Reset").onclick = CreateSquareDiv;
