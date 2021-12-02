import React from 'react';
import styled from '../style';

import TestNavi from '../components/TestNavi';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const MyWithdrawal = () => {
  return (
    <Wrapper>
      <TestNavi />
      <h1>Withdrawal</h1>
    </Wrapper>
  );
};

export default React.memo(MyWithdrawal);
