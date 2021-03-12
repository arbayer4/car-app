import { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { myCars } from "../../services/users";
import Car from "../../components/Car/Car";
import { Link } from "react-router-dom";

const MyCars = (props) => {
  const [myUserCars, setMyUserCars] = useState([]);

  useEffect(() => {
    const fetchMyCars = async () => {
      const cars = await myCars(props.user.username);
      console.log(cars.length);
      setMyUserCars(cars);
    };
    fetchMyCars();
  }, []);

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
      {myUserCars.length ? (
        <div>{carsJSX}</div>
      ) : (
        <div>
          <h1>Hello {props.user.username}</h1>
          <div>
            You haven't listed any cars. You can add your listing{" "}
            <Link to="/create-car">here</Link>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyCars;
