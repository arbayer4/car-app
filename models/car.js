const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    imgURL: [{ type: String, required: true }],
    year: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    vin: { type: String, required: false },
    mileage: { type: String, required: false },
    engine: { type: String, required: false },
    zipcode: { type: String, required: false },
    exteriorColor: { type: String, required: false },
    interiorColor: { type: String, required: false },
    doors: { type: String, required: false },
    transmission: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cars", Car);
