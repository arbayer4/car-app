import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getCar, deleteCar } from "../../services/cars";
import { useParams, Link } from "react-router-dom";
import './CarDetail.css'

const CarDetail = (props) => {
  const [car, setCar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCar(id);
      setCar(car);
      setLoaded(true);
    };
    fetchCar();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const imgJSX = car.imgURL.map((image, index) => (
    <img className="image-thumbnail" src={image} alt={`car ${index + 1}`} />
  ));

  return (
    <Layout user={props.user}>
      <div className="main-container">
        <div className="image-container">
          <img className="image-main" src={car.imgURL[0]} alt={car.make} />
          <div className="image-thumbnail">{imgJSX}</div>
        </div>
        <div className="details-container">
          <div className="title">{car.year} {car.make} {car.model}</div>
          <div className="description">{car.description}</div>
          <div className="lower-container">
            <div className="price">{car.price}</div>
            <div className="buttons">
              <button className="edit-button"><Link className="edit-link" to={`/cars/${car._id}/edit`}>Edit</Link></button>
              <button className="delete-button" onClick={() => deleteCar(car._id)}><Link className="delete-link" to={`/cars`}>Delete</Link></button>git
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CarDetail;
