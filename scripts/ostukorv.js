const addButton1 = document.querySelector("#add1");
const subtractButton1 = document.querySelector("#subtract1");

addButton1.addEventListener("click", function () {
  let output1 = document.querySelector("#output1");
  let result1 = Number(output1.innerText) + 1;
  output1.innerText = result1;

  calculatePrice();
});

subtractButton1.addEventListener("click", function () {
  let output1 = document.querySelector("#output1");
  let result1 = Number(output1.innerText) - 1;

  if (result1 < 0) {
    result1 = 0;
  }
  output1.innerText = result1;

  calculatePrice();
});

const addButton2 = document.querySelector("#add2");
const subtractButton2 = document.querySelector("#subtract2");

addButton2.addEventListener("click", function () {
  let output2 = document.querySelector("#output2");
  let result2 = Number(output2.innerText) + 1;
  output2.innerText = result2;

  calculatePrice();
});

subtractButton2.addEventListener("click", function () {
  let output2 = document.querySelector("#output2");
  let result2 = Number(output2.innerText) - 1;

  if (result2 < 0) {
    result2 = 0;
  }
  output2.innerText = result2;

  calculatePrice();
});

const tarneviisSelect = document.querySelector("#tarneviis-select");
tarneviisSelect.addEventListener("change", function () {
  calculatePrice()
})

function calculatePrice() {
  let hindToode1 = Number(document.querySelector("#output1").innerText) * 15.00;
  let hindToode2 = Number(document.querySelector("#output2").innerText) * 20.00;
  let hindTooted = hindToode1 + hindToode2;

  let tarneviis = document.querySelector("#tarneviis-select").value;
  let tarnehind = 0;
  switch (tarneviis) {
    case "omniva":
      tarnehind = 1;
      break;
    case "smartpost":
      tarnehind = 2;
      break;
    case "dpd":
      tarnehind = 3;
      break;
    default:
      tarnehind = 0;
  }

  if (hindTooted >= 50) {
    tarnehind = 0;
  }

  document.querySelector("#hind-transport").innerText = "Transport: " + tarnehind + ".00€";
  document.querySelector("#hind-kokku").innerText = "Kokku: " + (hindTooted + tarnehind) + ".00€";
} 