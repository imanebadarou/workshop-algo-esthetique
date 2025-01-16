function resetTousCurseurs() {
  document.getElementById("coldWarm").value=50;
  document.getElementById("wetDry").value=50;
  document.getElementById("passAct").value=50;
  document.getElementById("dullBright").value=50;
  document.getElementById("SugarBitter").value=50;
  document.getElementById("mildAcid").value=50;
  document.getElementById("silentNoisy").value=50;
  document.getElementById("harshHarmoni").value=50;
}

let paletteid = -1;
let colorPalette=[];

function palette(modeCouleur,modeForme, width, height){  
    colorPalette=[];
    
    

    let hue0 = random(0, 360);
    let sat0 = random(50, 100);
    let light0 = random(30, 100); 
    let baseColor = color(hue0,sat0,light0);
  
    switch (modeCouleur) {
        case 0:
          colorPalette = generateRandom();
        break;
        case 1:
            colorPalette = generateMonochromatic(baseColor);
        break;
        case 2:
            colorPalette = generateComplementary(baseColor);
        break;
        case 3:
            colorPalette = generateTriadic(baseColor);
        break;
        case 4:
            colorPalette = generateTetradic(baseColor);
        break;
        case 5:
            colorPalette = generateAdjacentTriadic(baseColor);
        break;
      }

      switch (modeForme) {
        case 0:
          colorPalette = generateRectRand(colorPalette);
        break;
        case 1:
            colorPalette = generateRectNorm(colorPalette);
        break;
        case 2:
            colorPalette = generateCarre(colorPalette);
        break;
      }

      

    }
  
  
  function generateRectRand (colorPalette){
    let x = 0;
    let nbRect = 4;
    let widthRestant = width;
    for (let i = 0; i < nbRect; i++) {
        let widthRdm;
        
        if (i < nbRect - 1) {
        widthRdm = random(50, (widthRestant / (nbRect - i))*1.4);
        } else {
        widthRdm = widthRestant;
        }
        
        widthRestant -= widthRdm;
  
        fill(colorPalette[i]);
        noStroke();
        rect(x, 0, widthRdm, height);
        x += widthRdm;
    }
}

function generateRectNorm (colorPalette){
  let x = 0;
  let nbRect = 4;
  let widthRdm = width/nbRect;
  for (let i = 0; i < nbRect; i++) {
      fill(colorPalette[i]);
      noStroke();
      rect(x, 0, widthRdm, height);
      x += widthRdm;
  }
}

function generateCarre (colorPalette){
  let x = 0;
  let y = 0;
  let nbRect = 4;
  let widthRdm = width;
  // let heightRdm = width;
  for (let i = 0; i < nbRect; i++) {
      fill(colorPalette[i]);
      noStroke();
      square(x, y, widthRdm,20);
      widthRdm=widthRdm*0.75;
      x = (width-widthRdm)/2;
      y = (width-widthRdm)/2;
  }
}

function generateRandom(){
  let palette = [];
  for (let i = 0; i < 4; i++) {
    palette.push(color(random(0, 360), sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));
  }
  return palette;
}


function generateMonochromatic(baseColor) {
    let palette = [];
    let baseHue = hue(baseColor);
    for (let i = 0; i < 4; i++) {
      let saturationValue = 100 - (i * 25);  // Diminuer la saturation
      let brightnessValue = 100 - (i * 20);  // Diminuer la luminosité
      palette.push(color(baseHue, saturationValue, brightnessValue ));
      
    }
    return palette;
}

function generateComplementary(baseColor) {
    let palette = [];
    let baseHue = hue(baseColor);
    palette.push(baseColor);
    palette.push(color((baseHue + random(-20,20)) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur complémentaire
    palette.push(color((baseHue + 180) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));   // Couleur complémentaire adjacente
    palette.push(color((baseHue + 180 + random(-20,20)) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Autre couleur complémentaire adjacente
    return palette;
}

function generateTriadic(baseColor) {
    let palette = [];
    let baseHue = hue(baseColor);
    let basesat = saturation(baseColor);
    palette.push(color(baseHue, basesat, random(90, 100)));  // Ajout d'une couleur complémentaire
    palette.push(baseColor);
    palette.push(color((baseHue + 135) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur décalée de 120° (triadique)
    palette.push(color((baseHue + 225) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur décalée de 240° (triadique)
    return palette;
}

function generateTetradic(baseColor) {
    let palette = [];
    let baseHue = hue(baseColor);
    palette.push(baseColor);
    palette.push(color((baseHue + 45) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur décalée de 120° (triadique)
    palette.push(color((baseHue + 180) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur décalée de 240° (triadique)
    palette.push(color((baseHue + 180+45) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Ajout d'une couleur complémentaire
    return palette;
}

function generateAdjacentTriadic(baseColor) {
    let palette = [];
    let baseHue = hue(baseColor);
    palette.push(color(baseHue, random(10, 40), random(90, 100)));  // Ajout d'une quatrième couleur (plus éloignée)
    palette.push(baseColor);
    palette.push(color((baseHue + 30) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur décalée de 30° (adjacente)
    palette.push(color((baseHue - 30 + 360) % 360, sqrt(random(0, 1))*100, sqrt(random(0, 1))*100));  // Couleur décalée de -30° (adjacente)
    return palette;
}


function setup() {
  let width = 450;
  let height = 450;
  let canvas = createCanvas(width, height);
  let modeCouleur=0;
  let modeForme=0;
  canvas.parent('palette');
  background(255);
  colorMode(HSB, 360,100,100);

  // modeCouleur = document.querySelector("input[type='radio'][name=couleurs]:checked").value;
  // console.log(modeCouleur); 

  const colors = document.getElementsByName('couleurs');
  for(var i = 0; i < colors.length; i++){
    if(colors[i].checked){
      
      modeCouleur = parseInt(colors[i].value);
    }
  }
  console.log(modeCouleur);

  const forms = document.getElementsByName('formes');
  for(var i = 0; i < forms.length; i++){
    if(forms[i].checked){
      
      modeForme = parseInt(forms[i].value);
    }
  }
  
  palette(modeCouleur, modeForme, width, height);
  resetTousCurseurs();
//   generatepalette(width, height)

  paletteid++;
  document.getElementById("cpt-palette").innerHTML=paletteid;


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
