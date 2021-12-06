import React from 'react';

import styled, { media } from '../../style';

import ImageCp from '../common/ImageCp';
import { filePath } from '../../modules/util';

const Wrapper = styled.li`
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

const PrdCp = ({ title, ProductFiles }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageCp alt={title} src={filePath(ProductFiles[0].saveName)} width="100%" />
        <ImageCp alt={title} src={filePath(ProductFiles[1].saveName)} width="100%" />
      </ImageWrapper>
    </Wrapper>
  );
};

export default React.memo(PrdCp);
