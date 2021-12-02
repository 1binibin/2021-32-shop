import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCp = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/img/banner-slider-1.jpg" className="w100" alt="Main Banner" />
      </div>
      <div>
        <img src="/img/banner-slider-1.jpg" className="w100" alt="Main Banner" />
      </div>
    </Slider>
  );
};

export default React.memo(BannerCp);
