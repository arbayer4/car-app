import Layout from "../../components/shared/Layout/Layout";
import { Redirect, useParams } from "react-router-dom";
import { getCar, updateCar, deleteCar } from "../../services/cars";
import { useState, useEffect } from "react";
import "./CarEdit.css";

const CarEdit = (props) => {
  const [car, setCar] = useState({
    imgURL: "",
    year: "",
    make: "",
    model: "",
    description: "",
    price: "",
    vin: "",
    mileage: "",
    engine: "",
    zipcode: "",
    exteriorColor: "",
    interiorColor: "",
    doors: "",
    transmission: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  let { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCar(id);
      setCar(car);
    };
    fetchCar();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar({
      ...car,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // let { id } = props.match.params;
    const updated = await updateCar(id, car);
    setUpdated({ updated });
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    // let { id } = props.match.params;
    const deleted = await deleteCar(id, car);
    setDeleted({ deleted });
  };

  if (isUpdated) {
    return <Redirect to={`/cars/${id}`} />;
  }
  if (isDeleted) {
    return <Redirect to={`/cars`} />;
  }

  return (
    <Layout user={props.user}>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="top">
          <div className="left-details">
            <label htmlFor="make">Make:</label>
            <input
              type="text"
              name="make"
              id="make"
              value={car.make}
              required
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              name="model"
              id="model"
              value={car.model}
              required
              onChange={handleChange}
            />{" "}
            <label htmlFor="year">Year:</label>
            <input
              type="text"
              name="year"
              id="year"
              value={car.year}
              required
              onChange={handleChange}
            />{" "}
            <label htmlFor="zipcode">Zip Code:</label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              value={car.zipcode}
              onChange={handleChange}
            />{" "}
            <label htmlFor="exterior-color">Exterior Color</label>
            <input
              type="text"
              name="exteriorColor"
              id="exterior-color"
              value={car.exteriorColor}
              onChange={handleChange}
            />{" "}
            <label htmlFor="doors">Doors:</label>
            <input
              type="text"
              name="doors"
              id="doors"
              value={car.doors}
              onChange={handleChange}
            />
          </div>
          <div className="right-details">
            <label htmlFor="mileage">Mileage:</label>
            <input
              type="text"
              name="mileage"
              id="mileage"
              value={car.mileage}
              onChange={handleChange}
            />
            <label htmlFor="transmission">Transmission:</label>
            <input
              type="text"
              name="transmission"
              id="transmission"
              value={car.transmission}
              onChange={handleChange}
            />{" "}
            <label htmlFor="engine">Engine:</label>
            <input
              type="text"
              name="engine"
              id="engine"
              value={car.engine}
              onChange={handleChange}
            />{" "}
            <label htmlFor="vin">VIN:</label>
            <input
              type="text"
              name="vin"
              id="vin"
              value={car.vin}
              onChange={handleChange}
            />{" "}
            <label htmlFor="interior-color">Interior Color:</label>
            <input
              type="text"
              name="interiorColor"
              id="interior-color"
              value={car.interiorColor}
              onChange={handleChange}
            />
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              id="price"
              value={car.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottom-details">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            required
            value={car.description}
            onChange={handleChange}
          />
          <label htmlFor="images">Images</label>
          <input
            type="url"
            name="imgURL"
            id="images"
            value={car.imgURL}
            required
            onChange={handleChange}
          />
        </div>
        <button className="save-button" type="submit">
          Save
        </button>
      </form>
    </Layout>
  );
};

export default CarEdit;