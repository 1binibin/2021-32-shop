import React from 'react';

import styled, { color, font, media } from '../../style';

import ImageCp from '../common/ImageCp';
import TitleCp from './TitleCp';
import PriceCp from './PriceCp';
import ContentCp from './ContentCp';
import ButtonCp from '../common/ButtonCp';

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  width: 24%;
  margin: 0 1% 1% 0;
  @media ${media.md} {
    width: 31.8333%;
    margin: 0 1.5% 1.5% 0;
  }
  @media ${media.sm} {
    width: 48%;
    margin: 0 2% 2% 0;
  }
  @media ${media.xs} {
    width: 97.5%;
    margin: 0 2.5% 2.5% 0;
  }
`;

const InfoWrap = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${font.en};
  text-align: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
  > div {
    img {
      max-width: 70px;
    }
  }
`;

const Button = styled(ButtonCp)`
  width: 60%;
  margin: 1em auto;
  padding: 1em;
`;

const SurfCp = ({ title, price, content, src, link }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageCp alt={title} src={src} />
      </ImageWrapper>
      <InfoWrap>
        <TitleCp title={title} />
        <ContentCp content={content} />
        <PriceCp price={price} size="0.875em" />
        <Button
          txt="SHOP NOW"
          colorHover={color.light}
          bgHover={color.black}
          bold="normal"
        />
      </InfoWrap>
    </Wrapper>
  );
};

export default React.memo(SurfCp);
