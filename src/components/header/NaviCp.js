import React, { useCallback, useState } from 'react';
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
  const [show, setShow] = useState(false);
  const onMouseEnter = useCallback((e) => {
    setShow(true);
  }, []);
  const onMouseLeave = useCallback((e) => {
    setShow(false);
  }, []);
  return (
    <li>
      {type === 'A' ? (
        <TitleWrap onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <TitleLink to="/" color="#333">
            SHOP
          </TitleLink>
          {show ? <SubAllCp data={data} /> : ''}
        </TitleWrap>
      ) : (
        <TitleWrapRel onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <TitleLink to="/" color="#333">
            {data.title}
          </TitleLink>
          {show ? <SubCp data={data.children} /> : ''}
        </TitleWrapRel>
      )}
    </li>
  );
};

export default React.memo(NaviCp);
