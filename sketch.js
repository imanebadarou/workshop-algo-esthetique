function palette(width, height){
  colorMode(HSB, 100);
  
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
    
    let hue = random(0, 100);
    let sat = random(50, 100);
    let light = random(30, 100);

    let c1 = color(hue, sat, light);
    fill(c1);
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
  
  palette(width, height);

}

