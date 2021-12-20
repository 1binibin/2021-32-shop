import React from 'react';
import withBannerWrapper from './withBannerWrapper';
import styled from '../../style';

import BannerCp from './BannerCp';

const Wrapper = styled.section`
  margin-top: 3em;
  margin-bottom: 2em;
`;

const CenterParallaxCp = ({ banner, id }) => {
  return (
    <Wrapper>
      <BannerCp {...banner} />
    </Wrapper>
  );
};

export default withBannerWrapper(React.memo(CenterParallaxCp));
