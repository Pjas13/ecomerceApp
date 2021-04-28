const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Store Schema
const StoreSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  openStore: {
    type: String,
  },
  closeStore: {
    type: String,
  }

});

module.exports = mongoose.model("Store", StoreSchema);
