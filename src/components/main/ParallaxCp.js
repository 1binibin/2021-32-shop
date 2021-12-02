import React, { useEffect, useState } from 'react';

import styled from '../../style';
import BannerCp from './BannerCp';
import { bannerApi } from './../../modules/api';

const Wrapper = styled.section`
  margin-top: 3em;
`;

const ParallaxCp = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    (async () => {
      const [data] = await bannerApi(242);
      setBanner(data);
    })();
  }, []);

  return <Wrapper>{banner ? <BannerCp {...banner} className="mb-5" /> : ''}</Wrapper>;
};

export default React.memo(ParallaxCp);
