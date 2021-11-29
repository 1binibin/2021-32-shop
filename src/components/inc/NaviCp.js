import React from 'react';
import { Link } from 'react-router-dom';

import styled from '../../style';
import SubAllCp from './SubAllCp';
import SubCp from './SubCp';

const TitleWrap = styled.div`
  padding: 1em;
`;

const TitleWrapRel = styled(TitleWrap)`
  position: relative;
`;

const NaviCp = ({ data, type }) => {
  return (
    <li>
      {type === 'A' ? (
        <TitleWrap>
          <Link to="/">SHOP</Link>
          <SubAllCp />
        </TitleWrap>
      ) : (
        <TitleWrapRel>
          <Link to="/">{data.title}</Link>
          <SubCp />
        </TitleWrapRel>
      )}
    </li>
  );
};

export default NaviCp;
