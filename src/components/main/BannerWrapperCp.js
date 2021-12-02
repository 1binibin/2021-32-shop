import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '../../style';
import { filePath } from '../../modules/util';

import BannerCp from './BannerCp';

const Wrapper = styled.section`
  width: 100%;
  overflow-x: hidden;
  padding-bottom: 3em;
`;

const BannerWrapperCp = () => {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BANNER_URL)
      .then(({ data }) => {
        const { content: contents, BoardFiles } = data.list;
        setBanner(
          contents.split('^^').map((v, i) => {
            let [title, price, content, link, pos] = v.split('|');
            return {
              title,
              price,
              content,
              link,
              pos,
              file: filePath(BoardFiles[i].saveName),
            };
          })
        );
      })
      .catch((err) => console.log(err));
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
