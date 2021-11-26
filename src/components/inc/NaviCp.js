import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { getAllTree } from '../../store/reducers/tree-slice';

const Wrapper = styled.div``;

const NaviCp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTree());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>네비</h1>
    </Wrapper>
  );
};

export default React.memo(NaviCp);
