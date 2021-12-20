import React from 'react';
import { useSelector } from 'react-redux';

import styled, { font, media } from '../../style';
import NaviCp from './NaviCp';

const Wrapper = styled.ul`
  display: flex;
  font-family: ${font.en}, ${font.kr}, sans-serif;
  font-weight: 500;
  @media ${media.md} {
    display: none;
  }
`;

const NaviWrapCp = () => {
  const { allTree } = useSelector((state) => state.tree);
  return (
    <Wrapper>
      <NaviCp data={allTree} type="A" />
      {allTree.map((v, i) => (
        <NaviCp data={v} key={i} />
      ))}
    </Wrapper>
  );
};

export default React.memo(NaviWrapCp);
