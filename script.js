const btn = document.getElementById("rotateButton");
const mainSquare = document.querySelector(".mainSquare");
const valueDisplay = document.querySelector(".colorDisplaySpace_valueDisplay");

class SquareManipulator {
  constructor() {
    this.rotationCounter = 0;
    this.rgbChanger = [0, 0, 0];
    this.scaleChanger = 1;
  }
  changeShape = function () {
    let rotationDirection;

    for (let i = 0; i < 3; i++) {
      this.rgbChanger[i] = Math.floor(Math.random() * (255 - 0 + 1) + 0);
      this.rotationCounter = Math.floor(Math.random() * (360 - 45 + 1) + 45);
    }

    if (this.scaleChanger === 1) {
      this.scaleChanger = 2;
      rotationDirection = `rotate(${this.rotationCounter}deg)`;
    } else {
      this.scaleChanger = 1;
      rotationDirection = `rotate(-${this.rotationCounter}deg)`;
    }

    mainSquare.style.transform = `translate(-50%, -50%) ${rotationDirection} scale(${this.scaleChanger})`;
    mainSquare.style.backgroundColor = `rgb(${this.rgbChanger[0]} , ${this.rgbChanger[1]} , ${this.rgbChanger[2]})`;
    valueDisplay.innerText = `RGB: ${this.rgbChanger[0]} , ${this.rgbChanger[1]} , ${this.rgbChanger[2]}`;
    valueDisplay.style.color = `rgb(${this.rgbChanger[0]} , ${this.rgbChanger[1]} , ${this.rgbChanger[2]})`;
  };
}

const newShape = new SquareManipulator();

btn.addEventListener("click", () => {
  newShape.changeShape();
});
