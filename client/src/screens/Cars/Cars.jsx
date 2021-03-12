import React, { useState, useEffect } from "react";
import "./Cars.css";
import Car from "../../components/Car/Car";
// import Search from "../../components/Search/Search";
// import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import { getCars } from "../../services/cars";
// import { PromiseProvider } from "mongoose";

const Cars = (props) => {
  const [allCars, setAllCars] = useState([]);
  const [queriedCars, setQueriedCars] = useState([]);
  // const [sortType, setSortType] = usestate([]);

  useEffect(() => {
    const fetchCars = async () => {
      const cars = await getCars();
      setAllCars(cars);
      setQueriedCars(cars);
    };
    fetchCars();
  }, [props.toggleFetch]);

  // const handleSort = type => {
  //   setSortType(type) {

  //   }
  // }

  const handleSearch = (event) => {
    const newQueriedCarsMake = allCars.filter((car) =>
      car.make.toLowerCase().includes(event.target.value.toLowerCase())
    );
    const newQueriedCarsModel = allCars.filter((car) =>
      car.model.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedCars(newQueriedCarsMake.concat(newQueriedCarsModel));
    //   // left out handleSort for now
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
    />
  ));

  return (
    <Layout user={props.user}>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div>{carsJSX}</div>
    </Layout>
  );
};

export default Cars;
