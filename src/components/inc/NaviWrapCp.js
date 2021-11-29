import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

import NaviCp from './NaviCp';

const Wrapper = styled.ul`
  display: flex;
`;

const NaviWrapCp = () => {
  const { allTree } = useSelector((state) => state.tree);
  console.log(allTree);
  return (
    <Wrapper>
      {allTree.map((v, i) => (
        <NaviCp data={v} key={i} />
      ))}
    </Wrapper>
  );
};

export default React.memo(NaviWrapCp);
