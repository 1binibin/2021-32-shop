import React, { useEffect, useState } from 'react';

import styled from '../../style';
import { bannerApi } from '../../modules/api';
import BannerCp from './BannerCp';

const Wrapper = styled.section`
  margin-top: 1em;
`;

const ParallaxCp = ({ id, className }) => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    (async () => {
      const [data] = await bannerApi(id);
      setBanner(data);
    })();
  }, [id]);
  return (
    <Wrapper className={className}>{banner ? <BannerCp {...banner} /> : ''}</Wrapper>
  );
};

export default React.memo(ParallaxCp);
