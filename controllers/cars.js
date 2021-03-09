const Car = require("../models/car");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (car) {
      return res.json(car);
    }
    res.status(404).json({ message: "Car not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCar = async (req, res) => {
  try {
    const car = await new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  await Car.findByIdAndUpdate(id, req.body, { new: true }, (error, car) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!car) {
      return res.status(404).json({ message: "Car not found!" });
    }
    res.status(200).json(car);
  });
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Car.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Car Listing deleted");
    }
    throw new Error("Car not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCar,
  getCars,
  getCar,
  updateCar,
  deleteCar,
};
