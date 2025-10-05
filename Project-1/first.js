const counterElement = document.getElementById("counter");
const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");

let counter = 0;

const updateCounter = (value) => {
  // for plus button
  counter = counter + value;
  counterElement.innerText = counter;

  if (counter >= 10) {
    // alert("Counter reached 10!");
    plusButton.setAttribute("disabled", "true");
  } else {
    plusButton.removeAttribute("disabled", false);
  }

  // for minus button

  if (counter <= 0) {
    minusButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled", false);
  }
};

// make the funtion
plusButton.addEventListener("click", () => {
  //   console.log("Plus button clicked");
  updateCounter(1);
});
minusButton.addEventListener("click", () => {
  //   console.log("Minus button clicked");
  updateCounter(-1);
});
