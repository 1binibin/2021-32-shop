import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';

import { flex } from '../../style';
import { getAllTree } from '../../store/reducers/tree-slice';
import LogoCp from './LogoCp';
import NaviWrapCp from './NaviWrapCp';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
    </Wrapper>
  );
};

export default HeaderCp;
