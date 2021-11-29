import React from 'react';
import styled, { Container } from '../style';

import HeaderCp from '../components/inc/HeaderCp';
// import TestNavi from '../components/TestNavi';

const Wrapper = styled(Container)`
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <HeaderCp />
      <h1>Main</h1>
    </Wrapper>
  );
};

export default Main;
