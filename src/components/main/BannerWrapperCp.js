import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import styled from '../../style';
import { filePath } from '../../modules/util';

import BannerCp from './BannerCp';
import { bannerApi } from './../../modules/api';

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3em;
`;

const BannerWrapperCp = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    (async () => {
      setBanner(await bannerApi(241));
    })();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
