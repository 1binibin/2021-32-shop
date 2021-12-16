import React from 'react';

import styled from '../../style';
import LogoCp from '../common/LogoCp';
import NaviWrapCp from './NaviWrapCp';
import MyPageCp from './MyPageCp';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;
`;

const HeaderCp = () => {
  return (
    <Wrapper>
      <LogoCp type="B" />
      <NaviWrapCp />
      <MyPageCp />
    </Wrapper>
  );
};

export default React.memo(HeaderCp);
