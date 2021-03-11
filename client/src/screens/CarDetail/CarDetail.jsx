import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getCar, deleteCar } from "../../services/cars";
import { useParams, Link, useHistory } from "react-router-dom";
import "./CarDetail.css";

const CarDetail = (props) => {
  const [car, setCar] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
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
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  const detailDeleteCar = () => {
    deleteCar(car._id);
    props.setToggleFetch((curr) => !curr);
    setTimeout(() => history.push("/cars"), 500);
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
      <div className="main-container">
        <div className="img-container">
          <img className="image-main" src={car.imgURL[num]} alt={car.make} />
          <div className="image-thumbnail">{imgJSX}</div>
        </div>
        <div className="details-container">
          <div className="title">
            {car.year} {car.make} {car.model}
          </div>
          <div className="description">{car.description}</div>
          <div className="price">$ {car.price}</div>
          {props.user ? (
            <div className="buttons">
              <button className="edit-button">
                <Link className="edit-link" to={`/cars/${car._id}/edit`}>
                  Edit
                </Link>
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={detailDeleteCar}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default CarDetail;
