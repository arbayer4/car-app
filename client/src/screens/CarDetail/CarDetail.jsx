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
          <img className="image-main" src={car.imgURL[num]} alt={car.make} />
          <div className="image-thumbnail">{imgJSX}</div>
        </div>
        <div className="details-container">
          <div className="title">
            {car.year} {car.make} {car.model}
          </div>
          <div className="vehicle-specs">
            <div className="mileage">
              <b>Mileage:</b> {car.mileage}
            </div>
            <div className="engine">
              <b>Engine Type:</b> {car.engine}
            </div>
            <div className="transmission">
              <b>Transmission:</b> {car.transmission}
            </div>
            <div className="doors">
              <b>Number Doors:</b> {car.doors}
            </div>
            <div className="exterior-color">
              <b>Exterior Color:</b> {car.exteriorColor}
            </div>
            <div className="interior-color">
              <b>Interior Color:</b> {car.interiorColor}
            </div>
            <div className="vin">
              <b>VIN:</b> {car.vin}
            </div>
            <div className="zipcode">
              <b>Seller Location:</b> {car.zipcode}
            </div>
            <b classname="description-header">Seller's Description: </b>
            <div className="description">{car.description}</div>
            <div className="price">
              <b>${car.price}</b>
            </div>
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
