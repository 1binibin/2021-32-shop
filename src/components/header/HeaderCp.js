import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from '../../style';
import { getAllTree } from '../../store/reducers/tree-slice';
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTree());
  }, [dispatch]);

  return (
    <Wrapper>
      <LogoCp type="B" />
      <NaviWrapCp />
      <MyPageCp />
    </Wrapper>
  );
};

export default React.memo(HeaderCp);
