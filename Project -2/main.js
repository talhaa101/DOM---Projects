const genarateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
// console.log(genarateRGBColor());

const updateColor = () => {
  const color = genarateRGBColor();
  const colorBox = document.getElementById("colorBox");
  const colorCode = document.getElementById("colorCode");

  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
};
// updateColor();

const copyColorCode = () => {
  //   const colorCode = document.getElementById("colorCode");
  //   const inputTag = document.createElement("input");
  //   //   document.body.appendChild(inputTag);
  //   //   inputTag.value = colorCode.innerText;
  //   //   inputTag.select();
  //    //   document.execCommand("copy");
  //   //   document.body.removeChild(inputTag);

  navigator.clipboard.writeText(colorCode.innerText);
  alert(`Color code ${colorCode.innerText} copied to clipboard!`);
};

document.getElementById("copyButton").addEventListener("click", () => {
  copyColorCode();
});

function generateNewColorBtn() {
  updateColor();
}
