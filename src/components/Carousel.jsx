import React from "react";
import { ButtonImg } from "./Button";
import Image from "../components/Image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Slide = ({ project }) => {
  return (
    <div className="slide">
      <div className="slide__preview">
        <a href={project.link}>
          <Image src={project.img} />
        </a>
      </div>
      <h4 className="slide__name">{project.name}</h4>
      <p className="slide__description">{project.des}</p>
    </div>
  );
};

const navigation = {
  nextEl: ".next",
  prevEl: ".prev",
};

const pagination = {
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: true,
};

function Carousel({ content }) {
  return (
    <Swiper
      navigation={navigation}
      pagination={pagination}
      speed={500}
      className="carousel"
      loop={true}
    >
      {content.map((project) => (
        <SwiperSlide>
          <Slide project={project} />
        </SwiperSlide>
      ))}
      <div className="next controller">
        <ButtonImg img="next.png" />
      </div>
      <div className="prev controller">
        <ButtonImg img="prev.png" />
      </div>
      <div className="swiper-pagination" id="swiper-pagination"></div>
    </Swiper>
  );
}

export default Carousel;
