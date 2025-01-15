let paletteid = 0;
let colorPalette;

function palette(width, height){
  colorMode(HSB, 360,100, 100);
  
  let nbRect = 4;
  let widthRestant = width;
  let x = 0;
  
  for (let i = 0; i < nbRect; i++) {
    let widthRdm;
    
    if (i < nbRect - 1) {
      widthRdm = random(50, widthRestant / (nbRect - i));
    } else {
      widthRdm = widthRestant;
    }
    
    widthRestant -= widthRdm;
    
    let hue = random(0, 360);
    let sat = random(20, 100);
    let light = random(20, 100);

    colorPalette[i] = color(hue, sat, light);
    fill(colorPalette[i]);
    noStroke();
    rect(x, 0, widthRdm, height);
    
    x += widthRdm;
  }
}

function setup() {
  let width = 500;
  let height =(500);
  createCanvas(width, height);
  background(255);
  
  generatepalette(width, height)

}

function generatepalette(width, height) {
  for (let i = 0; i < 200; i++) {
    palette(width, height);

    let fileName = `palette_${nf(paletteid, 3)}.png`;
    saveCanvas(fileName);

    paletteid++;
    clear();
    background(255);
  }
}
