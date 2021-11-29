import React from 'react';
import { Link } from 'react-router-dom';

import styled, { Underline } from '../../style';
import SubAllCp from './SubAllCp';
import SubCp from './SubCp';

const TitleWrap = styled.div`
  padding: 1em;
`;

const TitleWrapRel = styled(TitleWrap)`
  position: relative;
`;

const TitleLink = styled(Underline)``.withComponent(Link);

const NaviCp = ({ data, type }) => {
  return (
    <li>
      {type === 'A' ? (
        <TitleWrap>
          <TitleLink to="/" color="#333">
            SHOP
          </TitleLink>
          <SubAllCp />
        </TitleWrap>
      ) : (
        <TitleWrapRel>
          <TitleLink to="/" color="#333">
            {data.title}
          </TitleLink>
          <SubCp />
        </TitleWrapRel>
      )}
    </li>
  );
};

export default NaviCp;
