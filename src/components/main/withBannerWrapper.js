import React, { useEffect, useState } from 'react';
import { bannerApi } from '../../modules/api';

/* High Order Component ***/
const withBannerWrapper = (OriginComponent) => {
  const Component = (props) => {
    const [banner, setBanner] = useState(null);
    useEffect(() => {
      (async () => {
        const [data] = await bannerApi(props.id);
        setBanner(data);
      })();
    }, [props.id]);
    const combineProps = { ...props, banner };
    return <OriginComponent {...combineProps} />;
  };
  return Component;
};

export default withBannerWrapper;
