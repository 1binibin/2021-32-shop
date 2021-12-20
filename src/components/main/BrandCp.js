import React, { useState, useEffect } from 'react';
import styled, { media, Container } from '../../style';
import Slider from 'react-slick';
import { brandApi } from '../../modules/api';

const Wrapper = styled.div`
  background-color: #1e1f1c;
`;
const Brand = styled.div`
  margin: 6em 0 3em 0;
  padding: 0 1em;
  & img {
    width: 100%;
  }
`;

const slideConfig = {
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 6,
        initialSlide: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        initialSlide: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        initialSlide: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const BrandCp = ({ boardId }) => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    (async () => {
      setBrand(await brandApi(boardId));
    })();
  }, [boardId]);
  return (
    <Wrapper>
      <Container>
        <Slider {...slideConfig}>
          {brand.map((v, i) => (
            <Brand key={i}>
              <img src={v.src} alt={v.id} />
            </Brand>
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default React.memo(BrandCp);
