import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Slide } from "react-slideshow-image";
import "./Home.css";
// https://www.npmjs.com/package/react-slideshow-image

const Home = (props) => {
  const slideImages = [
    "https://i.imgur.com/vmVVnxS.jpeg",
    "https://imgur.com/nKskSK8",
    "https://imgur.com/qeTwVVm",
  ];

  return (
    <Layout user={props.user}>
      <div className="home"></div>
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[0]})`,
                height: "456px",
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
                height: "456px",
              }}
            >
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${slideImages[2]})`,
                height: "456px",
              }}
            >
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    </Layout>
  );
};

export default Home;
