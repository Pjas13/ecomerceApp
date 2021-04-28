const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Store Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
  }

});

module.exports = mongoose.model("Product", ProductSchema);
