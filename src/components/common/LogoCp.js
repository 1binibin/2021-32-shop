import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import styled, { media } from '../../style';
import LogoImgBlack from '../../assets/img/ella-surf-logo-b.png';
import LogoImgWhite from '../../assets/img/ella-surf-logo-w.png';

import SubMobileCp from '../header/SubMobileCp';

const Wrapper = styled.h1`
  display: flex;
  align-items: center;
`;

const Bars = styled.div`
  font-size: 1.5em;
  margin-right: 1em;
  display: none;
  @media ${media.md} {
    display: block;
    padding: 0.5em 0;
  }
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 70px;
`;

const LogoCp = ({ type = 'B' }) => {
  const [show, setShow] = useState(false);
  const onClick = useCallback(
    (e) => {
      setShow(!show);
    },
    [show]
  );
  return (
    <Wrapper>
      <Bars>
        <i className="fa fa-bars" onClick={onClick} />
        {show ? <SubMobileCp /> : ''}
      </Bars>
      <Link to="/">
        {type === 'B' ? (
          <Img src={LogoImgBlack} alt="Logo" />
        ) : (
          <Img src={LogoImgWhite} alt="Logo" />
        )}
      </Link>
    </Wrapper>
  );
};

export default LogoCp;
