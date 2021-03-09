const db = require("../db/connection");
const Car = require("../models/car");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const cars = [
    {
      imgURL: [
        "https://images.unsplash.com/photo-1521462627888-de71aacd558b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1521657215744-34dc4f384a17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2722&q=80",
        "https://images.unsplash.com/photo-1521657286746-db1bebb1900a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1521657249896-063c0c611fe5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      ],
      year: "1957",
      make: "Cheverlot",
      model: "Bel Air",
      description:
        " A two-door hard top sedan version of the 1957 Chevrolet. The 1957 Chevrolet is a car that was introduced by Chevrolet in September 1956 for the 1957 model year. It was available in three series models: the upscale Bel Air, the mid-range Two-Ten, and the One-Fifty. A two-door station wagon, the Nomad, was produced as a Bel Air model.",
      price: "120,000",
      vin: "--",
      mileage: "110,000",
      engine: "",
      "zip-code": "37201",
      "exterior color": "baby blue",
      "interior color": "baby blue and creme",
      doors: "two-door",
      transmission: "3-speed manual",
    },
    {},
    {},
    {},
    {},
  ];
  await Car.insertMany(cars);
  console.log("Created Cars!");
};
const run = async () => {
  await main();
  db.close();
};

run();
