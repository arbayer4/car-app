import { useState } from "react";
import "./CarCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createCar } from "../../services/cars";

const CarCreate = (props) => {
  const [car, setCar] = useState({
    imgURL: [],
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
    ownersEmail: props.user.email,
  });
  const [img, setImg] = useState("");

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar({
      ...car,
      [name]: value,
    });
  };
  const handleImage = (event) => {
    // event.preventDefault();
    setCar({
      ...car,
      ["imgURL"]: [...car.imgURL, img],
    });
    setImg("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createCar(car);
    setCreated({ created });
  };
  const deleteImage = (e) => {
    car.imgURL.splice(e.target.value, 1);
    setCar({ ...car });
  };

  if (isCreated) {
    return <Redirect to={`/cars`} />;
  }

  const imgJSX = car.imgURL.map((image, index) => (
    <div className="photo-container" key={index}>
      <img className="preview-image" src={image} alt={`car ${index + 1}`} />
      <button
        classname="delete-button"
        value={index}
        onClick={deleteImage}
        type="button"
      >
        Delete
      </button>
    </div>
  ));

  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className="top">
          <div className="left-details">
            <div className="label-input">
              {/* <label htmlFor="make">Make:</label> */}
              <input
                type="text"
                name="make"
                placeholder="Make"
                id="make"
                value={car.make}
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="model">Model:</label> */}
              <input
                type="text"
                name="model"
                placeholder="Model"
                id="model"
                value={car.model}
                required
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="year">Year:</label> */}
              <input
                type="text"
                name="year"
                placeholder="Year"
                id="year"
                value={car.year}
                required
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="zipcode">Zip Code:</label> */}
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                placeholder="Zipcode"
                value={car.zipcode}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="exterior-color">Exterior Color</label> */}
              <input
                type="text"
                name="exteriorColor"
                id="exterior-color"
                placeholder="Exterior Color"
                value={car.exteriorColor}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="doors">Doors:</label> */}
              <input
                type="text"
                name="doors"
                id="doors"
                placeholder="Number of Doors"
                value={car.doors}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right-details">
            <div className="label-input">
              {/* <label htmlFor="mileage">Mileage:</label> */}
              <input
                type="text"
                name="mileage"
                id="mileage"
                placeholder="Mileage"
                value={car.mileage}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="transmission">Transmission:</label> */}
              <input
                type="text"
                name="transmission"
                id="transmission"
                placeholder="Transmission"
                value={car.transmission}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="engine">Engine:</label> */}
              <input
                type="text"
                name="engine"
                id="engine"
                placeholder="Engine"
                value={car.engine}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="vin">VIN:</label> */}
              <input
                type="text"
                name="vin"
                id="vin"
                placeholder="VIN"
                value={car.vin}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="interior-color">Interior Color:</label> */}
              <input
                type="text"
                name="interiorColor"
                id="interior-color"
                placeholder="Interior Color"
                value={car.interiorColor}
                onChange={handleChange}
              />
            </div>
            <div className="label-input">
              {/* <label htmlFor="price">Price:</label> */}
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Asking Price"
                value={car.price}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="bottom-details">
          {/* <label htmlFor="description">Description</label> */}
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            cols="30"
            rows="10"
            maxlength="500"
            required
            value={car.description}
            onChange={handleChange}
          />
          <div className="preview-images">{imgJSX}</div>
          {/* <label htmlFor="images">Image URL:</label> */}
          <div className="image-input-button">
            <input
              type="url"
              name="imgURL"
              id="images"
              placeholder="Image URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button
              className="photo-button"
              type="button"
              onClick={handleImage}
            >
              Add Image
            </button>
          </div>
        </div>
        <button className="create-button" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default CarCreate;
