const db = require("../config/connection");
const { User, Vapes, Juice } = require("../models");
const userSeeds = require("./userSeeds.json");
const vapeSeeds = require('./vapeSeeds.json');
const juiceSeeds = require('./juiceSeeds.json');

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Vapes.deleteMany({});
    await Juice.deleteMany({});

    await User.create(userSeeds);
    await Vapes.create(vapeSeeds);
    await Juice.create(juiceSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
