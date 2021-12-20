import React from 'react';
import styled, { media, color, font } from '../../style';

const Ride = styled.div`
  margin: 0 1em;
  background-color: #fff;
  text-align: center;
  font-family: ${font.en};
`;
const Img = styled.div`
  & img {
    width: 100%;
  }
`;
const InfoWrap = styled.div`
  padding: 2em 0;
`;
const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 1em;
`;
const Content = styled.p``;

const RideCp = ({ id, title, src, content }) => {
  return (
    <Ride>
      <Img>
        <img src={src} alt={title} />
      </Img>
      <InfoWrap>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </InfoWrap>
    </Ride>
  );
};

export default React.memo(RideCp);
