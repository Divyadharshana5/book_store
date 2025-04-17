import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "VICTOR is the official partner of the Badminton World Federation (BWF) and Badminton Asia (BA). It collaborates with top players and teams to strengthen badminton and foster its popularity worldwide.",
    img: "https://tse1.mm.bing.net/th?id=OIP.JJMm-uUtigaYpAIQBwzQlQHaE7&pid=Api&P=0&h=180",
  },

  {
    id: 2,
    name: "Viswanathan Anand",
    text: "Viswanathan Anand is an Indian chess grandmaster. Anand is a five-time World Chess Champion, a two-time World Rapid Chess Champion and a two-time Chess World Cup Champion.",
    img: "https://tse3.mm.bing.net/th?id=OIP.46Unerlirr9uN-uLYiR55QHaHa&pid=Api&P=0&h=180",
  },

  {
    id: 3,
    name: "Sachin Tendulkar",
    text: "Sachin Ramesh Tendulkar is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest cricketers of all time",
    img: "https://techstory.in/wp-content/uploads/2015/05/sachin-tendulkar.jpg",
  },
];

const TestiMonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What Our Customer Says
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            There is a wisdom that is woe; but there is a woe that is madness...
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div>
                <div></div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestiMonial;
