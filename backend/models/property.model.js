const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  propertyDetails: {
    type: String,
  },
  services: {
    type: Array,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  sellerId: {
    type: String,
  },
  address: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const Property = new mongoose.model("Property", propertySchema);

module.exports = Property;
