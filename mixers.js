// p5.js sketch for Schedule 1 Trait Mixer

let drugDropdown;
let addItemButton;
let itemDropdown;
let mixerList = [];
let fertilizerList = [];
let fertilizerDropdown;
let resultTraits = [];
let soilDropdown;
let marketPrice = 0;
let totalCost = 0;
let baseDrugCostPerUnit = 0;
let mixerCost = 0;


let baseDrugs = {
  "OG Kush": ["calming"],
  "Sour Diesel": ["refreshing"],
  "Green Crack": ["energizing"],
  "Granddaddy Purple": ["sedating"],
  "Meth (Poor)": [""],
  "Meth (Moderate)": [""],
  "Meth (High)": [""]
};

let baseDrugCosts = {
  "OG Kush": { costPerUnit: 6.0 },
  "Sour Diesel": { costPerUnit: 6.625 },
  "Green Crack": { costPerUnit: 7.25 },
  "Granddaddy Purple": { costPerUnit: 7.875 },
  "Meth (Poor)": { costPerUnit: 15.0 },
  "Meth (Moderate)": { costPerUnit: 17.0 },
  "Meth (High)": { costPerUnit: 20.0 }
};
  

  let productCosts = {
    "Cuke": 2,
    "Flu Medicine": 5,
    "Gasoline": 5,
    "Donut": 3,
    "Energy Drink": 6,
    "Banana": 2,
    "Battery": 8,
    "Addy": 9,
    "Chili": 7,
    "Mouth Wash": 4,
    "Motor Oil": 6,
    "Paracetamol": 3,
    "Horse Semen": 9,
    "Viagra": 4,
    "Mega Bean": 7,
    "Iodine": 8
  };

let baseProducts = {
  "Cuke": "energizing",
  "Flu Medicine": "sedating",
  "Gasoline": "toxic",
  "Donut": "calorie-dense",
  "Energy Drink": "athletic",
  "Banana": "gingeritis",
  "Battery": "bright-eyed",
  "Addy": "thought-provoking",
  "Chili": "spicy",
  "Mouth Wash": "balding",
  "Motor Oil": "slippery",
  "Paracetamol": "sneaky",
  "Horse Semen": "long faced",
  "Viagra": "tropic thunder",
  "Mega Bean": "foggy",
  "Iodine": "jennerising"
};

let traitValues = {
  "shrinking": 0.6,
  "zombifying": 0.58,
  "cyclopean": 0.56,
  "anti-gravity": 0.54,
  "long faced": 0.52,
  "electrifying": 0.5,
  "glowing": 0.48,
  "tropic thunder": 0.46,
  "thought-provoking": 0.44,
  "jennerising": 0.42,
  "bright-eyed": 0.4,
  "spicy": 0.38,
  "foggy": 0.36,
  "slippery": 0.34,
  "athletic": 0.32,
  "balding": 0.3,
  "calorie-dense": 0.28,
  "sedating": 0.26,
  "sneaky": 0.24,
  "energizing": 0.22,
  "gingeritis": 0.2,
  "euphoric": 0.18,
  "focused": 0.16,
  "refreshing": 0.14,
  "munchies": 0.12,
  "calming": 0.1
};

let items = {
  "Cuke": {
    gives: "energizing",
    modifies: {
      "toxic": "euphoric",
      "slippery": "munchies",
      "sneaky": "paranoia",
      "foggy": "cyclopean",
      "gingeritis": "thought-provoking",
      "munchies": "athletic",
      "euphoric": "laxative"
    }
  },
  "Battery": {
    gives: "bright-eyed",
    modifies: {
      "munchies": "tropic thunder",
      "euphoric": "zombifying",
      "laxative": "calorie-dense",
      "electrifying": "euphoric",
      "cyclopean": "glowing",
      "shrinking": "munchies",     
    }
  },
  "Mega Bean": {
    gives: "foggy",
    modifies: {
      "energizing": "cyclopean",
      "calming": "glowing",
      "sneaky": "calming",
      "jennerising": "paranoia",
      "athletic": "laxative",
      "slippery": "toxic",
      "thought-provoking": "energizing",
      "seizure-inducing": "focused",
      "focused": "disorienting",
      "thought-provoking": "cyclopean",
      "shrinking": "electrifying"
    }
  },
  "Addy": {
    gives: "thought-provoking",
    modifies: {
      "sedating": "gingeritis",
      "long faced": "electrifying",
      "glowing": "refreshing",
      "foggy": "energizing",
      "explosive": "euphoric"
    }
  },
  "Chili": {
    gives: "spicy",
    modifies: {
      "athletic": "euphoric",
      "anti-gravity": "tropic thunder",
      "sneaky": "bright-eyed",
      "munchies": "toxic",
      "laxative": "long faced",
      "shrinking": "refreshing"
    }
  },
  "Mouth Wash": {
    gives: "balding",
    modifies: {
      "calming": "anti-gravity",
      "calorie-dense": "sneaky",
      "explosive": "sedating",
      "focused": "jennerising"
    }
  },
  "Motor Oil": {
    gives: "slippery",
    modifies: {
      "energizing": "munchies",
      "foggy": "toxic",
      "euphoric": "sedating",
      "paranoia": "anti-gravity",
      "munchies": "schizophrenia"
    }
  },
  "Paracetamol": {
    gives: "sneaky",
    modifies: {
      "energizing": "paranoia",
      "calming": "slippery",
      "spicy": "bright-eyed",
      "toxic": "tropic thunder",
      "glowing": "toxic",
      "foggy": "calming",
      "munchies": "anti-gravity",
      "paranoia": "balding",
      "electrifying": "athletic",
      "focused": "gingeritis"
    }
  },
  "Banana": {
    gives: "gingeritis",
    modifies: {
      "energizing": "thought-provoking",
      "calming": "sneaky",
      "toxic": "smelly",
      "long faced": "refreshing",
      "cyclopean": "thought-provoking",
      "disorienting": "focused",
      "focused": "seizure-inducing",
      "paranoia": "jennerising",
      "smelly": "anti-gravity"
    }
  },
  "Horse Semen": {
    gives: "long faced",
    modifies: {
      "anti-gravity": "calming",
      "gingeritis": "refreshing",
      "thought-provoking": "electrifying"
    }
  },
  "Viagra": {
    gives: "tropic thunder",
    modifies: {
      "athletic": "sneaky",
      "euphoric": "bright-eyed",
      "laxative": "calming",
      "disorienting": "toxic"
    }
  },
  "Iodine": {
    gives: "jennerising",
    modifies: {
      "calming": "balding",
      "toxic": "sneaky",
      "foggy": "paranoia",
      "calorie-dense": "gingeritis",
      "euphoric": "seizure-inducing",
      "refreshing": "thought provoking"
    }
},
"Flu Medicine": {
  gives: "sedating",
  modifies: {
    "calming": "bright-eyed",
    "athletic": "munchies",
    "thought-provoking": "gingeritis",
    "cyclopean": "foggy",
    "munchies": "slippery",
    "laxative": "euphoric",
    "euphoric": "toxic",
    "focused": "calming",
    "electrifying": "refreshing",
    "shrinking": "paranoia"
  }
},
"Gasoline": {
  gives: "toxic",
  modifies: {
    "gingeritis": "smelly",
    "jennerising": "sneaky",
    "sneaky": "tropic thunder",
    "munchies": "sedating",
    "energizing": "spicy",
    "euphoric": "energizing",
    "laxative": "foggy",
    "disorienting": "glowing",
    "paranoia": "calming",
    "electrifing": "disorienting",
    "shrinking": "focused"
  }
},
"Donut": {
  gives: "calorie-dense",
  modifies: {
    "calorie-dense": "explosive",
    "munchies": "calming",
    "balding": "sneaky",
    "anti-gravity": "slippery",
    "jennerising": "gingeritis",
    "focused": "euphoric",
    "shrinking": "energizing"
  }
},
"Energy Drink": {
  gives: "athletic",
  modifies: {
    "sedating": "munchies",
    "euphoric": "energizing",
    "spicy": "euphoric",
    "tropic thunder": "sneaky",
    "glowing": "disorienting",
    "foggy": "laxative",
    "disorienting": "electrfying",
    "schizophrenia": "balding",
    "focused": "shrinking"
  }
}
};

let logoImg;

let soilCosts = {
  "No Soil": 0,
  "Soil - 1 cycle ($10)": 10,
  "Long Life - 2 cycles ($30)": 15, // $30 for 2 cycles = $15/cycle
  "Extra Long Life - 3 cycles ($60)": 20 // $60 for 3 cycles = $20/cycle
};

let fertilizerCosts = {
  "No Fertilizer": 0,
  "PGR ($30)": 30,
  "Speed Grow ($30)": 30,
  "Fertilizer ($30)": 30
};

function preload() {
  logoImg = loadImage("hquill-01.png");
}

function setup() {
  createCanvas(700, 600);
  textSize(12);
  textAlign(CENTER, TOP);

  const uiCenterX = width / 2 - 55;
  drugDropdown = createSelect();
  drugDropdown.position(20, 75);
  drugDropdown.option("Select from List");
  drugDropdown.option("OG Kush");
  drugDropdown.option("Sour Diesel");
  drugDropdown.option("Green Crack");
  drugDropdown.option("Granddaddy Purple");
  drugDropdown.option("Meth (Poor)");
  drugDropdown.option("Meth (Moderate)");
  drugDropdown.option("Meth (High)");
  drugDropdown.selected("Select from List");
  drugDropdown.changed(() => {
    calculateBaseDrugCost();
    updateResult();
  });

  itemDropdown = createSelect();
  itemDropdown.option("Select Mixer");
  itemDropdown.position(20, 165);
  Object.keys(items).forEach(i => itemDropdown.option(i));
  itemDropdown.selected("Select Mixer");

  addItemButton = createButton("Add Mixer");
  addItemButton.position(20, 195);
  addItemButton.mousePressed(() => {
    let selected = itemDropdown.value();
    mixerList.push(selected);
    calculateBaseDrugCost();
    updateResult();
  });

  let resetButton = createButton("Reset");
  resetButton.position(120, 195);
  resetButton.mousePressed(() => {
    mixerList = [];
    calculateBaseDrugCost();
    updateResult();
  });

  soilDropdown = createSelect();
  soilDropdown.position(20, 105);
  soilDropdown.option("No Soil");
  soilDropdown.option("Soil - 1 cycle ($10)");
  soilDropdown.option("Long Life - 2 cycles ($30)");
  soilDropdown.option("Extra Long Life - 3 cycles ($60)");
  soilDropdown.selected("No Soil");

  fertilizerDropdown = createSelect();
  fertilizerDropdown.position(20, 135);
  fertilizerDropdown.option("No Fertilizer");
  fertilizerDropdown.option("PGR ($30)");
  fertilizerDropdown.option("Speed Grow ($30)");
  fertilizerDropdown.option("Fertilizer ($30)");
  fertilizerDropdown.changed(() => {
    let selected = fertilizerDropdown.value();
    if (selected !== "No Fertilizer" && !fertilizerList.includes(selected)) {
      fertilizerList.push(selected);
    }
  });
}

function calculateBaseDrugCost() {
  let selectedDrug = drugDropdown.value();
  let selectedSoil = soilDropdown.value();

  baseDrugCostPerUnit = baseDrugCosts[selectedDrug]?.costPerUnit || 0;
  mixerCost = mixerList.reduce((sum, m) => sum + (productCosts[m] || 0), 0);

  let soilCost = 0;
  let fertilizerCost = 0;

  if (["OG Kush", "Sour Diesel", "Green Crack", "Granddaddy Purple"].includes(selectedDrug)) {
    soilCost = (soilCosts[selectedSoil] || 0) / 8;
    fertilizerCost = (fertilizerList.length * 30) / 8;
    baseDrugCostPerUnit += soilCost + fertilizerCost;
  }

  totalCost = baseDrugCostPerUnit + mixerCost;
}

function updateResult() {
  let selectedDrug = drugDropdown.value();

  // 🛡️ Guard clause to prevent crashes on bad selection
  if (!baseDrugs[selectedDrug]) {
    resultTraits = [];
    return;
  }
  resultTraits = selectedDrug ? [...baseDrugs[selectedDrug].map(t => t.toLowerCase())] : [];

  mixerList.forEach(mixer => {
    const item = items[mixer];
    resultTraits = resultTraits.map(t => item.modifies[t] || t);
    if (!resultTraits.includes(item.gives.toLowerCase())) {
      resultTraits.push(item.gives.toLowerCase());
    }
  });

  let traitValues = {
    "shrinking": 0.6, "zombifying": 0.58, "cyclopean": 0.56, "anti-gravity": 0.54,
    "long faced": 0.52, "electrifying": 0.5, "glowing": 0.48, "tropic thunder": 0.46,
    "thought-provoking": 0.44, "jennerising": 0.42, "bright-eyed": 0.4, "spicy": 0.38,
    "foggy": 0.36, "slippery": 0.34, "athletic": 0.32, "balding": 0.3,
    "calorie-dense": 0.28, "sedating": 0.26, "sneaky": 0.24, "energizing": 0.22,
    "gingeritis": 0.2, "euphoric": 0.18, "focused": 0.16, "refreshing": 0.14,
    "munchies": 0.12, "calming": 0.1,
    "schizophrenia": 0.0, "disorienting": 0.0, "laxative": 0.0, "paranoia": 0.0
  };

  let baseMarketPrice = 0;
  if (selectedDrug === "OG Kush") baseMarketPrice = 35;
  else if (selectedDrug === "Sour Diesel") baseMarketPrice = 35;
  else if (selectedDrug === "Green Crack") baseMarketPrice = 35;
  else if (selectedDrug === "Granddaddy Purple") baseMarketPrice = 35;
  else if (["Meth (Poor)", "Meth (Moderate)", "Meth (High)"].includes(selectedDrug)) baseMarketPrice = 70;
  else if (selectedDrug === "Cocaine") baseMarketPrice = 150;

  let marketMultiplier = resultTraits.reduce((sum, trait) => sum + (traitValues[trait.toLowerCase()] || 0), 0);
  marketPrice = baseMarketPrice * (1 + marketMultiplier);
}
  resultTraits = selectedDrug ? [...baseDrugs[selectedDrug].map(t => t.toLowerCase())] : [];

  mixerList.forEach(mixer => {
    const item = items[mixer];
    resultTraits = resultTraits.map(t => item.modifies[t] || t);
    if (!resultTraits.includes(item.gives.toLowerCase())) {
      resultTraits.push(item.gives.toLowerCase());
    }
  });


function draw() {
  

  // Background pattern and styling
  background(33, 52, 34);
  stroke(0, 0, 0, 60); // black sine waves
  strokeWeight(0.5);
  noFill();

  for (let r = 5; r < Math.sqrt(width ** 2 + height ** 2) * 1.5; r += 5) {
    ellipse(width / 2, height / 2, r, r * 0.75);
  }

  for (let i = -50; i < height + 50; i += 10) {
    beginShape();
    for (let j = -50; j < width + 50; j += 10) {
      let y = i + sin(j * 0.05 + i * 0.1) * 5;
      vertex(j, y);
    }
    endShape();
  }


 
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(14);
  text("Select Drug, Soil, and Fertilizers", width / 2, 50);
  // Background pattern and styling
  background(33, 52, 34);
  stroke(0, 0, 0, 60); // black sine waves
  strokeWeight(0.5);
  noFill();

  for (let r = 5; r < Math.sqrt(width ** 2 + height ** 2) * 1.5; r += 5) {
    ellipse(width / 2, height / 2, r, r * 0.75);
  }

  for (let i = -50; i < height + 50; i += 10) {
    beginShape();
    for (let j = -50; j < width + 50; j += 10) {
      let y = i + sin(j * 0.05 + i * 0.1) * 5;
      vertex(j, y);
    }
    endShape();
  }


// Draw left control panel
  fill(40, 70, 40, 200); // slightly brighter green than canvas
  stroke(218, 165, 32); // gold
  strokeWeight(2);
  rect(10, 60, 280, 180); // Adjusted panel to contain dropdowns
  noStroke();

// Draw right-side panel for results display
  fill(40, 70, 40, 200); // slightly brighter green than canvas
  stroke(218, 165, 32); // gold stroke
  strokeWeight(2);
  rect(width / 2 - 25, 60, width / 2 - 15, 500); // right side panel
  noStroke();

// Draw left bottom panel for price displays
  fill(40, 70, 40, 200);
  stroke(218, 165, 32);
  strokeWeight(2);
  rect(10, 260, 280, 300);
  // nostroke();
  // stroke(0);
  // strokeWeight(0);

// Banner
  textAlign(CENTER, TOP);
  textSize(18);
  fill(218, 165, 32);
  noStroke();
  text("harleiquill's Mixing Calculator", width / 2, 10);
  textSize(12);
  fill(218, 165, 32);
  text("A companion for the game Schedule 1", width / 2, 30);

// Base Drug
  textAlign(RIGHT, TOP);
  fill(255);
  text("Base Drug:", width / 2 + 130, 75);
  textAlign(LEFT, TOP);
  text(drugDropdown.value() || "None Selected", width / 2 + 140, 75);

// Soil Used
  textAlign(RIGHT, TOP);
  fill(255);
  text("Soil Used:", width / 2 + 130, 95);
  textAlign(LEFT, TOP);
  text(soilDropdown.value(), width / 2 + 140, 95);

  // Fertilizers Used
  textAlign(RIGHT, TOP);
  text("Fertilizers Used:", width / 2 + 130, 115);
  textAlign(LEFT, TOP);
  text(fertilizerList.join(", "), width / 2 + 140, 115, 130);

  // Traits
  textAlign(RIGHT, TOP);
  text("Resulting Traits:", width / 2 + 130, 135);
  textAlign(LEFT, TOP);
  text(resultTraits.join(", "), width / 2 + 140, 150, 150);

 // Mixers
    textAlign(RIGHT, TOP);
    text("Applied Mixers (in order):", width / 2 + 130, 300);
    textAlign(LEFT, TOP);
    text(mixerList.join(" → "), width / 2 + 140, 315, 150);
  
  



  let costY = height - 300;
  let costX = 210;

// Base Drug Cost per Unit Line
  textAlign(RIGHT, TOP);
  textSize(14);
  fill(255);
  noStroke();
  text("Base Drug Cost per Unit:", costX, costY);
  textAlign(LEFT, TOP);
  text("$" + baseDrugCostPerUnit.toFixed(2), costX + 10, costY);
  textAlign(RIGHT, TOP);

// Soil per Unit Line
  textAlign(RIGHT, TOP);
  textSize(14);
  fill(255);
  noStroke();
  textAlign(RIGHT, TOP);
  text("Soil per Unit (included):", costX, costY + 15);
  textAlign(LEFT, TOP);
  text("$" + ((soilCosts[soilDropdown.value()] || 0) / 8).toFixed(2), costX + 10, costY + 15);

// Fertilizer per Unit Line
  textAlign(RIGHT, TOP);
  textSize(14);
  fill(255);
  noStroke();
  text("Fertilizer per Unit (included):", costX, costY + 30);
  textAlign(LEFT, TOP);
  let fertPerUnit = 0;
  if (["OG Kush", "Sour Diesel", "Green Crack", "Granddaddy Purple"].includes(drugDropdown.value())) {
    fertPerUnit = (fertilizerList.length * 30) / 8;
  }
  text("$" + fertPerUnit.toFixed(2), costX + 10, costY + 30);

// Mixer Total Cost Line
  textAlign(RIGHT, TOP);
  textSize(14);
  fill(255);
  noStroke();
  text("Mixer Total Cost:", costX, costY + 45);
  textAlign(LEFT, TOP);
  text("$" + mixerCost.toFixed(2), costX + 10, costY + 45);

// Total Cost per Unit Line
  textAlign(RIGHT, TOP);
  textSize(14);
  fill(255);
  noStroke();
  text("Total Cost per Unit:", costX, costY + 60);
  textAlign(LEFT, TOP);
  text("$" + totalCost.toFixed(2), costX + 10, costY + 60);


// Estimated Market Price Line
  textAlign(RIGHT, TOP);
  textSize(18);
  fill(218, 165, 32);
  text("Market Price:", costX, costY + 150);
  textAlign(LEFT, TOP);
  text("$" + marketPrice.toFixed(2), costX + 10, costY + 150);

  // Profit line
  textAlign(RIGHT, TOP);
  textSize(18);
  fill(218,  165, 32);
  noStroke();
  text("Profit Per Unit:", costX, costY + 175);
  textAlign(LEFT, TOP);
  let profit = marketPrice - totalCost;
  text("$" + profit.toFixed(2), costX + 10, costY + 175);
  textSize(12);
  fill(255);

  noStroke();

  // Draw logo in bottom-right corner
  imageMode(CORNER);
  let logoSize = 40;
  image(logoImg, width - logoSize - 10, height - logoSize - 10, logoSize, logoSize);
}
