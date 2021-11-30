let btnOne = document.querySelector("#btn").addEventListener("click", function () {
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;
  let blue = document.querySelector("#blue").value;
  document.querySelector("#firstColor").style.background = `rgb(${red},${green},${blue})`;
});
let btnTwo = document.querySelector("#btn2").addEventListener("click", function () {
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;
  let blue = document.querySelector("#blue").value;
  document.querySelector("#secondColor").style.background = `rgb(${red},${green},${blue})`;
});

let btnThree = document.querySelector('#btnFinish').addEventListener('click', function () {
  let colorRan = [];

  function thisColor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  let objColor = new thisColor(red.value, green.value, blue.value);
  colorRan.push(objColor)

  for (let i = 0; i < colorRan.length; i++) {
    let colorList = document.querySelector('#colorList');
    colorList.innerHTML = objColor.red + "," + objColor.green + "," + objColor.blue;
  }

  let secondColor = document.querySelector('#secondColor');

  let firstColor = document.querySelector('#firstColor');
  firstColor.addEventListener('click', function () {
    let firstColorPicker = document.querySelector('#firstColor');
    firstColorPicker.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    firstColorPicker.innerText = red.value + "," + green.value + "," + blue.value;
  });
  secondColor.addEventListener('click', function () {
    let secondColorPicker = document.querySelector('#secondColor');
    secondColorPicker.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    secondColorPicker.innerHTML = "<br>";
    secondColorPicker.innerText = red.value + "," + green.value + "," + blue.value;
  });
});