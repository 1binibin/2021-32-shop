import React from 'react';
import { Link } from 'react-router-dom';

import styled from '../../style';
import SubAllCp from './SubAllCp';
import SubCp from './SubCp';

const TitleWrap = styled.div`
  padding: 1em;
`;

function NaviCp({ data, type }) {
  return (
    <li>
      {type === 'A' ? (
        <TitleWrap>
          <Link to="/"> SHOP </Link>
          <SubAllCp />
        </TitleWrap>
      ) : (
        <TitleWrap>
          <Link to="/"> {data.title} </Link>
          <SubCp />
        </TitleWrap>
      )}
    </li>
  );
}

export default NaviCp;
