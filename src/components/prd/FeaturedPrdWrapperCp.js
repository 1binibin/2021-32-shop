import React from 'react';
import styled, { media } from '../../style';
import Slider from 'react-slick';

import withPrdWrapper from './withPrdWrapper';
import PrdCp from './PrdCp';

const Wrapper = styled.div`
  margin-top: 1em;
`;

const slideConfig = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  dotsClass: 'slick-dots-sns',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        initialSlide: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        initialSlide: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const FeaturedPrdWrapperCp = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <Slider {...slideConfig}>
        {props.prd.map((v, i) => (
          <PrdCp {...v} key={i} isList={false} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default withPrdWrapper(React.memo(FeaturedPrdWrapperCp));
