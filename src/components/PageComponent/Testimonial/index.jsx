import "./style.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Card from "../Card";
import PersonImage from "../../../image/person.png";
import PersonImage1 from "../../../image/person1.png";

const Testimonial = () => {
  const navigate = useNavigate();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
      },
    ],
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <div className="container-testimonial-main" id="testimonialSection">
        <div className="container-title-testimonial">
          <h1>Testimonial</h1>
          <h6>Berbagai review positif dari para pelanggan kami</h6>
        </div>
        <div className="container-card-testimonial m-auto">
          <Slider {...settings}>
            <Card
              image={PersonImage}
              desc="Good, tapi perlu perbaikan Love this so much.. Pelayanan Ramah, drivernya cepet response, bagus walau sedang promo tp tidak menurunkan pelayanan, tp aplikasinya perlu diperbaiki lg terutama untuk drivernya... "
              person="RAR Mongko, 39"
            />

            <Card
              image={PersonImage1}
              desc="Top Markotop !!"
              person="Lady Gaga, 37"
            />

            <Card
              image={PersonImage}
              desc="Wong ko ngene kok dibanding-bandingke
                                    Saing-saingke yo mesti kalah
                                    Tak oyak'o aku yo ora mampu
                                    Mung sak kuatku mencintaimu
                                    "
              person="Farel Prayoga, 18"
            />

            <Card image={PersonImage1} desc="Keren" person="Budi, 22" />

            <Card image={PersonImage} desc="B aja!" person="Andi, 33" />

            <Card
              image={PersonImage1}
              desc="Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok Mantap kok "
              person="Kang Mantap, 22"
            />
          </Slider>
        </div>
      </div>
      {/* <div className="container-rent-search-car m-auto">
        <div className="container-card-rent-testimonial">
          <div className="title-rent pt-5 m-auto">
            Sewa Mobil di Surabaya Sekarang
          </div>
          <div className="desc-rent m-auto pt-4">
            Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
            Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            <div id="button-container-banner" className="mt-5 pb-5">
              <button
                onClick={() => {
                  return navigate("/search");
                }}
                className="sewa-button"
              >
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Testimonial;
