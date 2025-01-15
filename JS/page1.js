let slider;
let tabConcepts;
function setup() {
  createCanvas(100, 100);

  // Create a slider and place it at the top of the canvas.
  // Set its default value to 0.
  // Set its step size to 50.
  slider = createSlider(0, 255, 0, 50);
  slider.position(10, 10);
  slider.size(80);
  tabConcepts = [[Passive,Active],[Dull,Bright],[closed,Warm],[Wet,Dry],[Sugary,Bitter],[Mild,Acid],[Silent,Noisy],[Harsh,Harmonious]];
  

}

function draw() {
  // Use the slider as a grayscale value.
  let g = slider.value();
  background(g);
}

let silentNoisyValue = 50;
document.getElementById('silentNoisy').addEventListener('input', function (e) {
silentNoisyValue = e.target.value;})