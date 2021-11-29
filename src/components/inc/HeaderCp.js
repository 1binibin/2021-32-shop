import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from '../../style';
import { getAllTree } from '../../store/reducers/tree-slice';
import LogoCp from './LogoCp';
import NaviWrapCp from './NaviWrapCp';
import MyPageCp from './MyPageCp';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default HeaderCp;
