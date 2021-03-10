import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Slide } from "react-slideshow-image";
import "./Home.css";
// https://www.npmjs.com/package/react-slideshow-image

const Home = (props) => {
  const slideImages = [
    "https://i.imgur.com/vmVVnxS.jpeg",
    "https://imgur.com/nKskSK8.jpeg",
    "https://imgur.com/qeTwVVm.jpeg",
  ];

  return (
    <Layout user={props.user}>
      <div className="home">
        <h2 className="home-header">Editors Choice</h2>
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[0]})`,
                }}
              >
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div
                className="slide-background"
                style={{
                  backgroundImage: `url(${slideImages[1]})`,
                }}
              >
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[2]})`,
                }}
              >
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
          {/* <div className="dots-class">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div> */}
        </div>
        <div className="about-us">
          <h2 className="about-us">About Sunday Driver</h2>
          <p className="about-us-blurb">
            Sunday Drivers gives vintage car enthusiasts the ability to buy and
            sell vehicles from one another. Sellers can list their vehicle(s)
            for sale through a simple signup process, then providing a vehicle’s
            details such as the make, model, year, price, image, etc. Car
            shoppers have the ability to view selling vehicles and contact the
            seller via email or phone.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
