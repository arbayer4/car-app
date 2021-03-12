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
    vin: { type: String, required: false, default: "--" },
    mileage: { type: String, required: false, default: "--" },
    engine: { type: String, required: false, default: "--" },
    zipcode: { type: String, required: false, default: "--" },
    exteriorColor: { type: String, required: false, default: "--" },
    interiorColor: { type: String, required: false, default: "--" },
    doors: { type: String, required: false, default: "--" },
    transmission: { type: String, required: false, default: "--" },
    owner: { type: Schema.Types.ObjectId, ref: "users" },
    // likes: [{type: Schema.Types.ObjectId, ref: "users"}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("cars", Car);
