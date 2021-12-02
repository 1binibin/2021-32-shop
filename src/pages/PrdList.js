import React from 'react';
import styled from '../style';

import TestNavi from '../components/TestNavi';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const PrdList = () => {
  return (
    <Wrapper>
      <TestNavi />
      <h1>Product List</h1>
    </Wrapper>
  );
};

export default React.memo(PrdList);
