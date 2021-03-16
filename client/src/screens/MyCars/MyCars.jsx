import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { myCars } from "../../services/users";
import Car from "../../components/Car/Car";
import { Link } from "react-router-dom";
import "./MyCars.css";

const MyCars = (props) => {
  const [myUserCars, setMyUserCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const name = props.user.username;
  const nameCap = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    const fetchMyCars = async () => {
      const cars = await myCars(props.user.username);
      if (cars) {
        setLoading(false);
      }
      setMyUserCars(cars);
    };
    fetchMyCars();
  }, [props.user.username]);

  const carsJSX = myUserCars.map((car, index) => (
    <Car
      key={index}
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
      <div className="my-cars-container">
        <h1>Hello {nameCap}</h1>
        <p>View All Your Current Listings Below:</p>
        {myUserCars.length ? (
          <div>{carsJSX}</div>
        ) : (
          <div>
            You haven't listed any cars. You can add your listing{" "}
            <Link to="/create-car">here</Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyCars;
