import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getCar, deleteCar } from "../../services/cars";
import { useParams, Link, useHistory } from "react-router-dom";
import "./CarDetail.css";

const CarDetail = (props) => {
  const [car, setCar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [userCars, setUserCars] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  let num = 0;
  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCar(id);
      setCar(car);
      setLoaded(true);
    };
    fetchCar();
    console.log(userCars);
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const detailDeleteCar = () => {
    deleteCar(car._id);
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => history.push("/mycars"), 500);
    // history.push("/cars");
  };

  const imgJSX = car.imgURL.map((image, index) => (
    <img
      className="image-thumbnail"
      src={image}
      alt={`car ${index + 1}`}
      key={index}
    />
  ));
  
  return (
    <Layout user={props.user}>
      <div className="vehicle-details-header">Vehicle Details</div>
      <div className="main-container">
        <div className="img-container">
          <img className="image-main" src={car.imgURL[num] ? car.imgURL[num] : "https://images.unsplash.com/photo-1606017116209-b1ed168465e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"} alt={car.make} />
          <div className="image-thumbnail">{imgJSX}</div>
        </div>
        <div className="details-container">
          <div className="title">{car.year} {car.make} {car.model}</div>
          <div className="vehicle-specs">
            <div className="vehicle-attribute">Mileage:  <span className="vehicle-input">{car.mileage}</span></div>
            <div className="vehicle-attribute">Engine Type:  <span className="vehicle-input">{car.engine}</span></div>
            <div className="vehicle-attribute">Transmission:  <span className="vehicle-input">{car.transmission}</span></div>
            <div className="vehicle-attribute">Number Doors:  <span className="vehicle-input">{car.doors}</span></div>
            <div className="vehicle-attribute">Exterior Color:  <span className="vehicle-input">{car.exteriorColor}</span></div>
            <div className="vehicle-attribute">Interior Color:  <span className="vehicle-input">{car.interiorColor}</span></div>
            <div className="vehicle-attribute">VIN:  <span className="vehicle-input">{car.vin}</span></div>
            <div className="vehicle-attribute">Seller Location:  <span className="vehicle-input">{car.zipcode}</span></div>
            <br/>
            <div className="vehicle-attribute">Seller's Description</div>
            <div className="vehicle-description">{car.description}</div>
            <div className="vehicle-price">${car.price}</div>
          </div>
          {!props.user ? (
            <div className="buttons">
              <a
                href={`mailto:${car.owner.email}?subject==?UTF-8?B?IPCfmpg=?= SUNDAY DRIVER - Shopper Inquiry for your ${car.year} ${car.make} ${car.model}!`}
              >
                <button type="button" className="email-seller-button">
                  Email Seller
                </button>
              </a>
              <button type="button" className="call-seller-button">
                Call Seller
              </button>
            </div>
          ) : props.user.username === car.owner.username ? (
            <div className="buttons">
              <Link className="edit-link" to={`/cars/${car._id}/edit`}>
                <button className="edit-button">Edit</button>
              </Link>
              <button
                type="button"
                className="delete-button"
                onClick={detailDeleteCar}
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="buttons">
              <a
                href={`mailto:${car.owner.email}?subject==?UTF-8?B?IPCfmpg=?= SUNDAY DRIVER - Shopper Inquiry for your ${car.year} ${car.make} ${car.model}!`}
              >
                <button type="button" className="email-seller-button">
                  Email Seller
                </button>
              </a>
              <button type="button" className="call-seller-button">
                Call Seller
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CarDetail;
