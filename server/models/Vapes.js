const { Schema, model } = require("mongoose");

const vapeSchema = new Schema({
  brand: {
    type: String,
    required: true
  },

  flavor: {
    type: String,
    required: true
  },

  capacity_mL: {
    type: Number,
    required: true
  },

  battery_life: {
    type: String,
    required: true
  },

  nicotine_percentage: {
    type: Number,
    required: true
  },

  puffs: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: [
    {
      type: String
    }
  ]
})  

const Vapes = model('Vapes', vapeSchema);

module.exports = Vapes;