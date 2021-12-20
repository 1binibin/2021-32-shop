import React from 'react';
import styled, { media, color, font, css } from '../../style';

import StarCp from '../common/StarCp';

const Insta = styled.div`
  margin: 0 1em;
  background-color: #fff;
  text-align: center;
  font-family: ${font.en};
`;
const Img = styled.div`
  text-align: center;
  & img {
    display: inline-block;
    max-width: 100%;
  }
`;
const InfoWrap = styled.div`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Writer = styled.p`
  font-size: 1em;
  margin-bottom: 1em;
`;
const Content = styled.p`
  line-height: 1.75em;
  font-size: 0.875em;
  margin-bottom: 2em;
`;

const Star = styled(StarCp)`
  margin: 0.5em auto;
`;

const InstaCp = ({ src, content, writer, star }) => {
  return (
    <Insta>
      <Img>
        <img src={src} alt={src} />
      </Img>
      <InfoWrap>
        <Star point={star} size="1.5" />
        <Content>{content}</Content>
        <Writer>{writer}</Writer>
      </InfoWrap>
    </Insta>
  );
};

export default React.memo(InstaCp);
