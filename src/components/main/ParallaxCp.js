import React from 'react';
import withBannerWrapper from './withBannerWrapper';
import styled from '../../style';

import BannerCp from './BannerCp';

const Wrapper = styled.section`
  margin-top: 1em;
`;

const ParallaxCp = ({ banner, id }) => {
  return (
    <Wrapper>
      <BannerCp {...banner} />
    </Wrapper>
  );
};

export default withBannerWrapper(React.memo(ParallaxCp));
