import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { Slide } from "react-slideshow-image";
import "./Home.css";
// https://www.npmjs.com/package/react-slideshow-image

const Home = (props) => {
  const slideImages = [
    "https://i.imgur.com/vmVVnxS.jpeg",
    "https://i.imgur.com/O1WqOIt.jpeg",
    "https://i.imgur.com/LrbOtZi.jpeg",
  ];

  return (
    <Layout user={props.user}>
      <div className="home">
        {/* <h2 className="home-header">Our Favorites</h2> */}
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[0]})`,
                }}
              >
                <span></span>
              </div>
            </div>
            <div className="each-slide">
              <div
                className="slide-background"
                style={{
                  backgroundImage: `url(${slideImages[1]})`,
                }}
              >
                <span></span>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[2]})`,
                }}
              >
                <span></span>
              </div>
            </div>
          </Slide>
        </div>
        <div className="about-us">
          <h2 className="about-us-header">About Sunday Driver</h2>
          <p className="about-us-blurb">
            Sunday Drivers gives vintage car enthusiasts the ability to buy and
            sell vehicles from one another. Sellers can list their vehicle(s)
            for sale through a simple signup process, then providing a vehicle’s
            details such as the make, model, year, price, image, etc. Car
            shoppers have the ability to view selling vehicles and contact the
            seller via email or phone.
          </p>
        </div>
        <div className="blog">
          <h2 className="blog-title">
            5 SIGNS THAT SAY YOU'RE A CAR ENTHUSIAST
          </h2>
          <p className="blog-post">
            There are many signs that say you’re a car enthusiast: the
            encyclopedic knowledge of car brands and models, the meticulous care
            you provide to your car, and the tendency to ruin other people’s
            conversations with brutally technical car talk, just to name a few.
            Here are 5 other signs that give you away as a car nerd:
          </p>
          <ol className="blog-list">
            <li>
              YOU PREFER TO DO THINGS MANUALLY
              <p>
                Whether you know how to do it or not, there’s just an allure to
                using a manual transmission. Sure a dual-clutch transmission can
                do things a little bit faster, but there’s just something more
                fun about manual transmissions. The act of changing gears makes
                the relationship between you and the car more personal, as if
                you’re the rider and the car is the horse. Every depression of
                the clutch and the shifting of the gear lever through its
                various gates remind you that you are driving, and not just
                getting to one place. And you also do this for some reason…
              </p>
            </li>
            <li>
              YOU PERK UP WHEN YOU HEAR CAR CONVERSATIONS
              <p>
                Sure your cousin’s new baby is cute and the amount of diaper
                changes, and eventual baby-proofing to the apartment makes for
                interesting small talk. However, you can’t help but notice the
                conversation brewing in the corner of the party about turbo
                swaps, engine tuning, and tactics to defeat emission tests at
                the inspection station.
              </p>
            </li>
            <li>YOU INTERJECT WITHOUT BEING ASKED</li>
            <p>
              Once you make your way to that car conversation, you interject
              without being asked. There’s a chance they don’t know how
              turbochargers work or how you almost bought that E46 M3 but
              decided the Volkswagen GTI was “just a better deal,” it’s better
              to be safe than sorry!
            </p>
            <li>
              YOU FEEL AN INSTANT BOND WITH THE PERSON DRIVING THE SAME CAR AS
              YOU
            </li>
            <p>
              In one glance you know that you and the stranger would be best
              buds if you knew each other. The both of you made the same great
              decision/mistake in choosing the car you’re driving, and fate has
              brought the two of you together for this short journey on the
              road. Sometimes you look over and nod. Sometimes you take the
              extra effort to roll down the window and throw a wave and a quick
              rev. The EVO and WRX/STI-bros have it the worst, because if they
              don’t wave at each other, kittens will die.
            </p>
            <div className="blog-credit">
              <a href="https://drivetribe.com/p/5-signs-that-say-youre-a-car-enthusiast-bnYvDdAES6S46jJkL2DkJw?iid=NScnPcPBTliv75o9EI6VjQ">
                <span className="blog-credit">
                  By: Hansen Lukman posted in SHIFTING LANES
                </span>
              </a>
            </div>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
