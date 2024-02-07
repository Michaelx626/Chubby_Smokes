const { Schema, model } = require("mongoose");

const juiceSchema = new Schema({
  brand: {
    type: String,
    required: true
  },

  flavor: {
    type: String,
    required: true
  },

  size: {
    type: Number,
    required: true
  },

  nicotine_percentage: {
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

const Juice = model('Juice', juiceSchema);

module.exports = Juice;