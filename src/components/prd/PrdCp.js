import React from 'react';

import styled, { color, media } from '../../style';

import ImageCp from '../common/ImageCp';
import VideoCp from '../common/VideoCp';
import ButtonCp from '../common/ButtonCp';
import { filePath } from '../../modules/util';

const Wrapper = styled.li`
  position: relative;
  cursor: pointer;
  width: 19%;
  margin: 0 1% 1% 0;
  @media ${media.lg} {
    width: 24%;
  }
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

const ImageWrapper = styled.div`
  position: relative;
  & > :nth-of-type(2) {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: all 0.5s;
  }
  &:hover {
    & > :nth-of-type(2) {
      opacity: 1;
    }
  }
`;

const ButtonWrapper = styled.div`
  padding: 0.5em;
  width: 100%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const PrdCp = ({ title, ProductFiles }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageCp alt={title} src={filePath(ProductFiles[0].saveName)} width="100%" />
        <div>
          {ProductFiles[1].saveName.includes('.mp4') ? (
            <VideoCp alt={title} src={filePath(ProductFiles[1].saveName)} width="100%" />
          ) : (
            <ImageCp alt={title} src={filePath(ProductFiles[1].saveName)} width="100%" />
          )}
          <ButtonWrapper>
            <ButtonCp txt="ADD TO CART" w="100%" colorHover={color.info} bgHover={color.dark} bold="bold" />
          </ButtonWrapper>
        </div>
      </ImageWrapper>
    </Wrapper>
  );
};

export default React.memo(PrdCp);
