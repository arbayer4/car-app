import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getCar, deleteCar } from "../../services/cars";
import { useParams, Link, useHistory } from "react-router-dom";
import "./CarDetail.css";

const CarDetail = (props) => {
  const [car, setCar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [userCarPics, setUserCarPics] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchCar = async () => {
      const fetchedCar = await getCar(id);
      setCar(fetchedCar);
      setUserCarPics(fetchedCar.imgURL);
      setLoaded(true);
    };
    fetchCar();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const detailDeleteCar = () => {
    deleteCar(car._id);
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => history.push("/mycars"), 500);
  };

  const switchPic = (index) => {
    let temp = userCarPics;
    const featured = temp.splice(index, 1);
    temp = featured.concat(temp);
    setUserCarPics(temp);
  };
  let newPrice = car.price.replace(/\d(?=(?:\d{3})+$)/g, "$&,"); //recieved from stackoverflow https://stackoverflow.com/questions/27311714/adding-commas-to-numbers-when-typing
  const imgJSX = userCarPics.map((image, index) => {
    if (index > 0) {
      return (
        <img
          className="image-thumbnail"
          src={image}
          alt={`car ${index + 1}`}
          key={index}
          onClick={() => switchPic(index)}
        />
      );
    }
  });

  return (
    <Layout user={props.user}>
      <div className="vehicle-details-header">Vehicle Details</div>
      <div className="main-container-dt">
        <div className="img-container">
          <img className="image-main" src={userCarPics[0]} alt={car.make} />
          <div className="image-thumbnail">{imgJSX}</div>
        </div>
        <div className="details-container">
          <div className="title">
            <div className="title-car">
              {car.year} {car.make} {car.model}
            </div>
            <div className="title-price">${newPrice}</div>
          </div>
          <br />
          <div className="vehicle-specs">
            <div className="vehicle-attribute">
              Mileage: <span className="vehicle-input">{car.mileage}</span>
            </div>
            <div className="vehicle-attribute">
              Engine Type: <span className="vehicle-input">{car.engine}</span>
            </div>
            <div className="vehicle-attribute">
              Transmission:{" "}
              <span className="vehicle-input">{car.transmission}</span>
            </div>
            <div className="vehicle-attribute">
              Number Doors: <span className="vehicle-input">{car.doors}</span>
            </div>
            <div className="vehicle-attribute">
              Exterior Color:{" "}
              <span className="vehicle-input">{car.exteriorColor}</span>
            </div>
            <div className="vehicle-attribute">
              Interior Color:{" "}
              <span className="vehicle-input">{car.interiorColor}</span>
            </div>
            <div className="vehicle-attribute">
              VIN: <span className="vehicle-input">{car.vin}</span>
            </div>
            <div className="vehicle-attribute">
              Seller Location:{" "}
              <span className="vehicle-input">{car.zipcode}</span>
            </div>
            <br />
            <div className="vehicle-attribute">Seller's Description</div>
            <div className="vehicle-description">{car.description}</div>
          </div>
          <div className="lower-container">
            {!props.user ? (
              <div className="buttons">
                <a
                  href={`mailto:${car.owner.email}?subject==🚘= SUNDAY DRIVER - Shopper Inquiry for your ${car.year} ${car.make} ${car.model}!`}
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
          <br />
          <Link className="back-to-cars" to={`/cars`}>
            ← Back to Collector Cars
          </Link>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default CarDetail;
