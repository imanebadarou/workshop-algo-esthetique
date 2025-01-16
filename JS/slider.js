    document.querySelector("button").addEventListener("click", () => {
      const sliders = [
        {label: "Cold-Warm", value: (document.getElementById("coldWarm").value/100).toFixed(2)},
        {label: "Wet-Dry", value: (document.getElementById("wetDry").value/100).toFixed(2)},
        {label: "Passive-Active", value: (document.getElementById("passAct").value/100).toFixed(2)},
        {label: "Dull-Bright", value: (document.getElementById("dullBright").value/100).toFixed(2)},
        {label: "Sugary-Bitter", value: (document.getElementById("SugarBitter").value/100).toFixed(2)},
        {label: "Mild-Acid", value: (document.getElementById("mildAcid").value/100).toFixed(2)},
        {label: "Silent-Noisy", value: (document.getElementById("silentNoisy").value/100).toFixed(2)},
        {label: "Harsh-Harmonious", value: (document.getElementById("harshHarmoni").value/100).toFixed(2)},
      ];


      let contentCsv = "Concept,Value\n";
      sliders.forEach(slider => {
        contentCsv += `${slider.label},${slider.value}\n`;
      });

      contentCsv+="\nassocié à :\n ,H,S,B\n";

      colorPalette.forEach((color) => {
        // Utiliser les fonctions de p5.js pour récupérer les composants HSB de la couleur
        let h = hue(color);         // Récupérer la teinte (hue)
        let s = saturation(color);  // Récupérer la saturation (sat)
        let b = brightness(color);  // Récupérer la luminosité (light)
      
        // Ajouter les valeurs au CSV sous forme formatée
        contentCsv += ` ,${h.toFixed(0)},${s.toFixed(0)},${b.toFixed(0)}\n`;
      });


      const file = new Blob([contentCsv], { type: "text/csv" });
      const a = document.createElement("a");
      a.download = "slider-values.csv";
      a.href = URL.createObjectURL(file);

      setup();

      a.click();
  });

