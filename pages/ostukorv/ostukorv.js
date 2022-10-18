const addButton1 = document.querySelector("#add1");
const subtractButton1 = document.querySelector("#subtract1");

addButton1.addEventListener("click", function () {
  let output1 = document.querySelector("#output1");
  let result1 = Number(output1.innerText) + 1;
  output1.innerText = result1;
});

subtractButton1.addEventListener("click", function () {
  let output1 = document.querySelector("#output1");
  let result1 = Number(output1.innerText) - 1;

  if (result1 < 0) {
    result1 = 0;
  }
  output1.innerText = result1;
});

const addButton2 = document.querySelector("#add2");
const subtractButton2 = document.querySelector("#subtract2");

addButton2.addEventListener("click", function () {
  let output2 = document.querySelector("#output2");
  let result2 = Number(output2.innerText) + 1;
  output2.innerText = result2;
});

subtractButton2.addEventListener("click", function () {
  let output2 = document.querySelector("#output2");
  let result2 = Number(output2.innerText) - 1;

  if (result2 < 0) {
    result2 = 0;
  }
  output2.innerText = result2;
});


