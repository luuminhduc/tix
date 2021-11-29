import { Carousel } from "react-bootstrap";
import React from "react";

const Carousels = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel_item carousel_item_1"></Carousel.Item>
      <Carousel.Item className="carousel_item carousel_item_2"></Carousel.Item>
      <Carousel.Item className="carousel_item carousel_item_3"></Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
