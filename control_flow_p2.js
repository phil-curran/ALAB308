// constant definitions
const growthRadius = 5;
const growthArea = Math.round(Math.PI * growthRadius ** 2 * 100) / 100;
const minimumPlantSpace = 0.8;

// variable definitions
let plantCount = 100;
let plantArea = plantCount * minimumPlantSpace;
let plantGrowthRate = 2;
let weekCount = 1;

// utility functions
const calculatePlantArea = () => {
  return Math.round(updatePlantArea() * 100) / 100;
};

const calculateNewRadius = () => {
  return Math.round(Math.sqrt(calculatePlantArea() / Math.PI) * 100) / 100;
};

const calculateGardenCapacity = () => {
  return Math.round((updatePlantArea() / growthArea) * 1000) / 10;
};

const updatePlantArea = () => {
  plantArea = plantCount * minimumPlantSpace;
  return plantArea;
};

const growPlants = (weeks) => {
  if (parseInt(weeks) > 0 || typeof weeks === "string") {
    console.log("\n---        PLANT CALCULATOR       ---\n");
    console.log(
      `Your available growing area is ${growthArea} square meters.\n`
    );
    while (weekCount <= weeks) {
      console.log(`Week ${weekCount}:`);
      console.log(
        `You ${
          weekCount === 1 ? "start with" : "now have"
        } ${plantCount} plants.`
      );
      console.log(`They take up ${calculatePlantArea()} square meters.`);
      console.log(
        `The radius of the new growing area would need to be ${calculateNewRadius()} meters.`
      );
      console.log(
        `The plants take up ${calculateGardenCapacity()}% of the growing area.`
      );
      // increment values
      weekCount += 1;
      plantCount *= 2;
    }
  } else {
    console.log("You must enter an integer greater than 0.");
  }
};

growPlants(10);
