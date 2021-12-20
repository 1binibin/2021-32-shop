import React, { useEffect, useState } from 'react';
import { rideApi, instaApi } from '../../modules/api';

const slideConfig = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dotsClass: 'slick-dots-sns',
  responsive: [
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

const withSnsWrapper = (OriginComponent) => {
  const Component = (props) => {
    const [list, setList] = useState([]);
    useEffect(() => {
      (async () => {
        const data =
          props.model === 'ride' ? await rideApi(props.id) : await instaApi(props.id);
        setList(data);
      })();
    }, [props]);
    const combineProps = { ...props, list, slideConfig };
    return <OriginComponent {...combineProps} />;
  };
  return Component;
};

export default withSnsWrapper;
