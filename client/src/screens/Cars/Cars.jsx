import React, { useState, useEffect } from "react";
import "./Cars.css";
import Car from "../../components/Car/Car";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import { getCars } from "../../services/cars";

const Cars = (props) => {
  const [allCars, setAllCars] = useState([]);
  const [queriedCars, setQueriedCars] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await getCars();
      setAllCars(cars);
      setQueriedCars(cars);
    };
    fetchCars();
  }, [props.toggleFetch]);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "make-ascending":
        setQueriedCars(AZ(queriedCars));
        break;
      case "make-descending":
        setQueriedCars(ZA(queriedCars));
        break;
      case "price-ascending":
        setQueriedCars(lowestFirst(queriedCars));
        break;
      case "price-descending":
        setQueriedCars(highestFirst(queriedCars));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    const newQueriedCarsMake = allCars.filter((car) =>
      car.make.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedCars(newQueriedCarsMake, () => handleSort(sortType));

    const newQueriedCarsModel = allCars.filter((car) =>
      car.model.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedCars(newQueriedCarsModel);
  };

  const handleSubmit = (event) => event.preventDefault();

  const carsJSX = queriedCars.map((car, index) => (
    <Car
      _id={car._id}
      imgURL={car.imgURL}
      year={car.year}
      description={car.description}
      make={car.make}
      model={car.model}
      price={car.price}
      key={index}
    />
  ));

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <Sort onSubmit={handleSubmit} onChange={handleSort} />
      <div>{carsJSX}</div>
    </Layout>
  );
};

export default Cars;
