// p5.js sketch for Schedule 1 Trait Mixer

let baseProductDropdown;
let addItemButton;
let itemDropdown;
let mixerList = [];
let resultBox;
let baseProduct;

let baseDrugs = {
    "OG Kush": ["calming"],
    "Sour Diesel": ["refreshing"],
    "Green Crack": ["energizing"],
    "Granddaddy Purple": ["sedating"],
    "Poor Meth": ["poor"],
    "Moderate Meth": ["moderate"],
    "High Quality Meth": ["high quality"]
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

function preload() {
  logoImg = loadImage("hquill-01.png");
}

function setup() {
  createCanvas(400, 400);
  textSize(12);
  textAlign(CENTER, TOP);

  const uiCenterX = width / 2 - 55;
  drugDropdown = createSelect();
  drugDropdown.position(uiCenterX, height - 90);
  drugDropdown.option("OG Kush");
  drugDropdown.option("Sour Diesel");
  drugDropdown.option("Green Crack");
  drugDropdown.option("Granddaddy Purple");
  drugDropdown.option("Meth (Poor)");
  drugDropdown.option("Meth (Moderate)");
  drugDropdown.option("Meth (High)");
  drugDropdown.changed(() => {
    calculateBaseDrugCost();
    updateResult();
  });

  itemDropdown = createSelect();
  itemDropdown.position(uiCenterX, height - 60);
  Object.keys(items).forEach(i => itemDropdown.option(i));

  addItemButton = createButton("Add Mixer");
  addItemButton.position(uiCenterX, height - 30);
  addItemButton.mousePressed(() => {
    let selected = itemDropdown.value();
    mixerList.push(selected);
    calculateBaseDrugCost();
    updateResult();
  });

  let resetButton = createButton("Reset");
  resetButton.position(uiCenterX + 110, height - 30);
  resetButton.mousePressed(() => {
    mixerList = [];
    calculateBaseDrugCost();
    updateResult();
  });

  calculateBaseDrugCost();
  updateResult();
}

function calculateBaseDrugCost() {
  const selectedDrug = drugDropdown.value();
  baseDrugCostPerUnit = baseDrugCosts[selectedDrug]?.costPerUnit || 0;
  mixerCost = mixerList.reduce((sum, m) => sum + (productCosts[m] || 0), 0);
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
}

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

  stroke(218, 165, 32);
  strokeWeight(4);
  noFill();
  rect(0, 0, width, height);
  noStroke();

  // Banner
  textAlign(CENTER, TOP);
  textSize(18);
  fill(218, 165, 32);
  text("harleiquill's Mixing Calculator", width / 2, 10);
  textSize(12);
  text("Schedule 1 - Available on Steam", width /2, 40);
  fill(255);

  // Base Drug
  textAlign(RIGHT, TOP);
  text("Base Drug:", width / 2 - 10, 60);
  textAlign(LEFT, TOP);
  text(drugDropdown.value() || "None Selected", width / 2 + 10, 60);

  // Traits
  textAlign(RIGHT, TOP);
  text("Resulting Traits:", width / 2 - 10, 80);
  textAlign(LEFT, TOP);
  text(resultTraits.join(", "), width / 2 + 10, 100, width - (width / 2 + 20));

  // Mixers
  textAlign(RIGHT, TOP);
  text("Applied Mixers (in order):", width / 2 - 10, 140);
  textAlign(LEFT, TOP);
  text(mixerList.join(" → "), width / 2 + 10, 160, width - (width / 2 + 20));

  // Costs
  let costY = height - 150;
  textAlign(RIGHT, TOP);
  text("Base Drug Cost per Unit:", width / 2 - 10, costY);
  textAlign(LEFT, TOP);
  text("$" + baseDrugCostPerUnit.toFixed(2), width / 2 + 10, costY);
  textAlign(RIGHT, TOP);
  text("Mixer Total Cost:", width / 2 - 10, costY + 15);
  textAlign(LEFT, TOP);
  text("$" + mixerCost.toFixed(2), width / 2 + 10, costY + 15);
  textAlign(RIGHT, TOP);
  text("Total Cost per Unit:", width / 2 - 10, costY + 30);
  textAlign(LEFT, TOP);
  text("$" + totalCost.toFixed(2), width / 2 + 10, costY + 30);

  noStroke();

  // Draw logo in bottom-right corner
  imageMode(CORNER);
  let logoSize = 40;
  image(logoImg, width - logoSize - 10, height - logoSize - 10, logoSize, logoSize);
}
