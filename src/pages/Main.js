import React from 'react';
import styled, { Container } from '../style';

import HeaderCp from '../components/inc/HeaderCp';
import BannerWrapperCp from '../components/main/BannerWrapperCp';

const Wrapper = styled(Container)`
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <BannerWrapperCp />
    </Wrapper>
  );
};

export default Main;
