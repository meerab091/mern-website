import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css"; 

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  const slides = [
    {
      src: "/assets/slider1.jpg",
      title:"New Arrival",
      subtitle: "Seasonal Sale Up to 40% OFF",
      button: "Shop Now",
    },
    {
      src: "/assets/slider2.jpg",
      title: "Mega Offer",
      subtitle: "Buy 1 Get 1 Free",
      button: "Grab Deal",
    },
    {
      src: "/assets/slider3.jpg",
      title: "Clearance Sale",
      subtitle: "Last Chance Discounts",
      button: "Buy Now",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="slide-item">
            <img src={slide.src} alt={`slide-${i}`} className="slide-image" />
            <div className="slide-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
