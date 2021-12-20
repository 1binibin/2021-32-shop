import React from 'react';
import Button from '@mui/material/Button';
import styled, { css, color, font, media } from '../../style';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  position: relative;
  font-family: ${font.en};
`;

const positionStyle = ({ pos }) => {
  if (pos === 'L')
    return css`
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
      text-align: left;
    `;
  else if (pos === 'R')
    return css`
      right: 5%;
      top: 50%;
      transform: translateY(-50%);
      text-align: right;
    `;
  else
    return css`
      left: 50%;
      bottom: 10%;
      transform: translateX(-50%);
      text-align: center;
    `;
};

const Contents = styled.ul`
  max-width: 400px;
  background-color: rgba(255, 255, 255, 0.35);
  position: absolute;
  padding: 2em;
  ${positionStyle}
  @media ${media.md} {
    max-width: auto;
    width: 80%;
    font-size: 0.75em;
  }
`;

const Title = styled.h3`
  font-size: 2.5em;
  font-weight: bold;
  color: ${color.black};
  margin-bottom: 0.75em;
  @media ${media.md} {
    font-size: 1.5em;
  }
`;

const Price = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${color.primary};
  margin-bottom: 1.5em;
  @media ${media.md} {
    display: none;
  }
`;

const Content = styled.div`
  font-size: 1.125em;
  line-height: 1.5em;
  color: ${color.dark};
  margin-bottom: 1.5em;
  @media ${media.md} {
    display: none;
  }
`;

const BannerCp = ({ title, price, content, link = '/', file, pos }) => {
  return (
    <Wrapper>
      <Contents pos={pos}>
        <Title>{title}</Title>
        <Price>From {price}</Price>
        <Content>{content}</Content>
        <Button
          to={link}
          component={Link}
          variant="contained"
          disableElevation
          color="warning"
        >
          SHOP NOW
        </Button>
      </Contents>
      <img src={file} className="w100" alt={title} />
    </Wrapper>
  );
};

export default React.memo(BannerCp);
