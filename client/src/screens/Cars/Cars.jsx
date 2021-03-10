import React, { useState, useEffect } from "react";
import "./Cars.css";
import Car from "../../components/Car/Car";
// import Search from "../../components/Search/Search";
// import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import Sort from "../../components/Sort/Sort";
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
  }, []);

  // const handleSort = type => {
  //   setSortType(type) {

  //   }
  // }

  // const handleSearch = (event) => {
  //   const newQueriedCars = allCars.filter((car) =>
  //     car.make.toLowerCase().includes(event.target.value.toLowerCase())
  //   );
  //   setQueriedCars(newQueriedCars);
  //   // left out handleSort for now
  // };

  // const handleSubmit = (event) => event.preventDefault();

  const carsJSX = queriedCars.map((car, index) => (
    <Car
      _id={car._id}
      imgURL={car.imgURL}
      year={car.year}
      make={car.make}
      model={car.model}
      price={car.price}
      zipcode={car.zipcode}
    />
  ));

  return (
    <Layout user={props.user}>
      <div>{carsJSX}</div>
    </Layout>
  );
};

export default Cars;
