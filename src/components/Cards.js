import React, { Component } from "react";
import Card from "./CardUI";
import FooterPage from "./Footer";
import BootstrapNavbar from "./Header";
import img1 from "../assets/car1.jpg";
import img2 from "../assets/car2.jpg";
import img3 from "../assets/car3.jpg";
import img4 from "../assets/car4.jpg";
import img5 from "../assets/car5.jpg";
import img6 from "../assets/car6.jpg";
import img7 from "../assets/car7.jpg";
import img8 from "../assets/car8.jpg";
import Carousel from "react-elastic-carousel";
import Showandhide from "./Showandhide";


const breakPoints = [
  { width: 500, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];



class Cards extends Component {
  render() {
    return (
      <div>
        <BootstrapNavbar />
        <div className="container-fluid  justify-content-center">
          <div className="row">
            <Carousel breakPoints={breakPoints}>
              <div className="col ">
                <Card
                  imgsrc={img1}
                  title="Nissan"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col  ">
                <Card
                  imgsrc={img2}
                  title="BMW"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col ">
                <Card
                  imgsrc={img3}
                  title="Dodge"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col  ">
                <Card
                  imgsrc={img4}
                  title="Toyota"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col  ">
                <Card
                  imgsrc={img5}
                  title="Mercedes Benz"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col ">
                <Card
                  imgsrc={img6}
                  title="BMW"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col  ">
                <Card
                  imgsrc={img7}
                  title="Corvette"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
              <div className="col ">
                <Card
                  imgsrc={img8}
                  title="Ford"
                  Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. A, illo! Explicabo earum veniam error maiores pariatur? Asperiores iste at placeat!"
                />
              </div>
            </Carousel>
          </div>
          <Showandhide/>
        </div>
        <FooterPage />
      </div>
    );
  }
}

export default Cards;
