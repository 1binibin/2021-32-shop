import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import LogoImgBlack from '../../assets/img/ella-surf-logo-b.png';
import LogoImgWhite from '../../assets/img/ella-surf-logo-w.png';

const Img = styled.img`
  max-width: 70px;
`;

const LogoCp = ({ type = 'B' }) => {
  return <Link to="/">{type === 'B' ? <Img src={LogoImgBlack} alt="" /> : <Img src={LogoImgWhite} alt="" />}</Link>;
};

export default LogoCp;
