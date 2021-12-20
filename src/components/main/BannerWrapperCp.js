import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import styled from '../../style';
import { bannerApi } from '../../modules/api';

import BannerCp from './BannerCp';

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3em;
`;

const BannerWrapperCp = ({ id }) => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    (async () => setBanner(await bannerApi(id)))();
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots-banner',
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {banner.map((v, i) => (
          <BannerCp {...v} key={i} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default React.memo(BannerWrapperCp);
