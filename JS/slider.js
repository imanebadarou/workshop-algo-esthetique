    document.querySelector("button").addEventListener("click", () => {
    const sliders = [
      {label: "Cold", value: (document.getElementById("coldWarm").value/100).toFixed(2)},
      {label: "Warm", value: (1-(document.getElementById("coldWarm").value/100)).toFixed(2)},
      {label: "Wet", value: (document.getElementById("wetDry").value/100).toFixed(2)},
      {label: "Dry", value: (1-(document.getElementById("wetDry").value/100)).toFixed(2)},
      {label: "Passive", value: (document.getElementById("passAct").value/100).toFixed(2)},
      {label: "Active", value: (1-(document.getElementById("passAct").value/100)).toFixed(2)},
      {label: "Dull", value: (document.getElementById("dullBright").value/100).toFixed(2)},
      {label: "Bright", value: (1-(document.getElementById("dullBright").value/100)).toFixed(2)},
      {label: "Sugary", value: (document.getElementById("SugarBitter").value/100).toFixed(2)},
      {label: "Bitter", value: (1-(document.getElementById("SugarBitter").value/100)).toFixed(2)},
      {label: "Mild", value: (document.getElementById("mildAcid").value/100).toFixed(2)},
      {label: "Acid", value: (1-(document.getElementById("mildAcid").value/100)).toFixed(2)},
      {label: "Silent", value: (document.getElementById("silentNoisy").value/100).toFixed(2)},
      {label: "Noisy", value: (1-(document.getElementById("silentNoisy").value/100)).toFixed(2)},
      {label: "Harsh", value: (document.getElementById("harshHarmoni").value/100).toFixed(2)},
      {label: "Harmonious", value: (1-(document.getElementById("harshHarmoni").value/100)).toFixed(2)},
    ];


    let contentCsv = "Concept,Value\n";
    sliders.forEach(slider => {
      contentCsv += `${slider.label},${slider.value}\n`;
    });

    contentCsv+="\nassocié à :\n ,H,S,L\n";

    paletteValue.forEach((color) => {
        contentCsv += ` ,${color.hue.toFixed(0)},${color.sat.toFixed(0)},${color.light.toFixed(0)}\n`;
      });


    const file = new Blob([contentCsv], { type: "text/csv" });
    const a = document.createElement("a");
    a.download = "slider-values.csv";
    a.href = URL.createObjectURL(file);

    setup();

    a.click();
  });

