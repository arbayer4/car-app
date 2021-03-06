import Layout from "../../components/shared/Layout/Layout";
import { useHistory, useParams } from "react-router-dom";
import { getCar, updateCar } from "../../services/cars";
import { useState, useEffect } from "react";
import "../CarCreate/CarCreate.css";
import Spinner from "../../utils/spinner";

const CarEdit = (props) => {
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
  });

  const [img, setImg] = useState("");
  const [isUpdated, setUpdated] = useState(false);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();
  const history = useHistory();

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
  const handleImage = (event) => {
    event.preventDefault();
    setCar({
      ...car,
      imgURL: [...car.imgURL, img],
    });
    setImg("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
    const updated = await updateCar(id, car);
    setUpdated({ updated });
    if (!isUpdated) {
      console.log("Error Creating");
    }
    setTimeout(() => {
      history.push(`/cars/${id}`);
    }, 1000);
  };
  const deleteImage = (e) => {
    car.imgURL.splice(e.target.value, 1);
    setCar({ ...car });
  };

  const imgJSX = car.imgURL.map((image, index) => (
    <div className="photo-container" key={index}>
      <img className="preview-image" src={image} alt={`car ${index + 1}`} />
      <button
        className="form-delete-button"
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
            <label htmlFor="make">Make:</label>
            <input
              placeholder="Make"
              required
              value={car.make}
              name="make"
              id="make"
              autoFocus
              onChange={handleChange}
            />
            <label htmlFor="model">Model:</label>
            <input
              required
              name="model"
              placeholder="Model"
              id="model"
              value={car.model}
              onChange={handleChange}
              // innerHTML="*"
            />
            <label htmlFor="year">Year</label>
            <input
              required
              type="number"
              name="year"
              placeholder="Year"
              id="year"
              value={car.year}
              onChange={handleChange}
            />
            <label htmlFor="zipcode">zipcode</label>
            <input
              type="number"
              name="zipcode"
              id="zipcode"
              placeholder="Zipcode"
              value={car.zipcode}
              onChange={handleChange}
            />
            <label htmlFor="exterior-color">exterior color</label>
            <input
              name="exteriorColor"
              id="exterior-color"
              placeholder="Exterior Color"
              value={car.exteriorColor}
              onChange={handleChange}
            />
            <label htmlFor="doors">Number of doors</label>
            <input
              name="doors"
              id="doors"
              placeholder="Number of Doors"
              value={car.doors}
              onChange={handleChange}
            />
          </div>
          <div className="right-details">
            <label htmlFor="mileage">Mileage</label>
            <input
              name="mileage"
              id="mileage"
              placeholder="Mileage"
              value={car.mileage}
              onChange={handleChange}
            />
            <label htmlFor="transmission">Transmision</label>
            <input
              name="transmission"
              id="transmission"
              placeholder="Transmission"
              value={car.transmission}
              onChange={handleChange}
            />
            <label htmlFor="engine">Engine</label>
            <input
              name="engine"
              id="engine"
              placeholder="Engine"
              value={car.engine}
              onChange={handleChange}
            />
            <label htmlFor="vin">VIN</label>
            <input
              name="vin"
              id="vin"
              placeholder="VIN"
              value={car.vin}
              onChange={handleChange}
            />
            <label htmlFor="interior-color">Interior Color</label>
            <input
              name="interiorColor"
              id="interior-color"
              placeholder="Interior Color"
              value={car.interiorColor}
              onChange={handleChange}
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              value={car.price}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottom-details">
          <label htmlFor="description">Car Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            cols="30"
            rows="10"
            required
            value={car.description}
            onChange={handleChange}
          />
          <div className="preview-images">{imgJSX}</div>
          <label htmlFor="images">Add Image URL</label>

          <div className="image-input-button">
            <input
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
        {car.imgURL.length ? null : <p>Must Upload At Least One Picture</p>}

        {loading ? (
          <Spinner />
        ) : (
          <button
            className="create-button"
            type="submit"
            disabled={!car.imgURL.length}
          >
            Save Changes
          </button>
        )}
      </form>
    </Layout>
  );
};

export default CarEdit;
