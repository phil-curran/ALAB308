/*
Part 3: Errors in Judgement
The scientists decided not to listen to your recommendations, and have instead 
started with 100 plants in the original 5-meter-radius garden.
Use try and catch to wrap your work in an error-handling block. 
If the amount of space required to hold the originally provided number of plants 
exceeds the amount of space available, 
throw a new error and log an appropriate message.
*/
// constant definitions
const growthRadius = 5;
const growthArea = Math.round(Math.PI * growthRadius ** 2 * 10) / 10;
const minimumPlantSpace = 0.8;

// variable definitions
let plantCount = 98;
let plantArea = plantCount * minimumPlantSpace;
let plantGrowthRate = 2;
let weekCount = 1;

// utility functions
const chooseStrategy = (pct) => {
  if (pct < 50) {
    console.log(
      `You should plant more plants, or let existing plants keep growing.`
    );
    console.log("");
  } else if (pct >= 50 && pct <= 80) {
    console.log(`You should monitor plant growth.`);
  } else {
    console.log(`You should prune plants to <= 80% capacity.`);
  }
};

const calculatePlantArea = () => {
  return Math.round(updatePlantArea() * 100) / 100;
};

const calculateGardenCapacity = () => {
  return Math.round((updatePlantArea() / growthArea) * 1000) / 10;
};

const updatePlantArea = () => {
  plantArea = plantCount * minimumPlantSpace;
  return plantArea;
};

const growPlants = (weeks) => {
  if (parseInt(weeks) > 0 && typeof weeks !== "string") {
    try {
      if (calculateGardenCapacity() > 100) {
        throw new Error("You don't have enough space for that many plants!");
      } else {
        console.log("\n---        PLANT CALCULATOR       ---\n");
        console.log(
          `Your available growing area is ${growthArea} square meters.\n`
        );
        while (weekCount <= weeks) {
          console.log(`Week ${weekCount}:`);
          console.log(
            `You ${
              weekCount === 1 ? "plant" : "now have"
            } ${plantCount} plants.`
          );
          console.log(`They take up ${calculatePlantArea()} square meters.`);
          console.log(
            `The plants take up ${calculateGardenCapacity()}% of the growing area.`
          );
          console.log(chooseStrategy(calculateGardenCapacity()));
          // increment values
          weekCount += 1;
          plantCount *= 2;
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    console.log("You must enter an integer greater than 0.");
  }
};

growPlants(1);
growPlants(2);
growPlants(3);
