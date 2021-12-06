import React from 'react';

import styled, { Container, SmallContainer, AnimationWrapper } from '../../style';
import ImageCp from '../common/ImageCp';
import SubAllNaviCp from './SubNaviCp';

const Wrapper = styled(AnimationWrapper)`
  width: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  position: absolute;
  left: 0;
  top: 3em;
  background-color: #fff;
`;

const Wrap = styled(SmallContainer)`
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  display: flex;
  > :nth-of-type(1) {
    width: 60%;
  }
  > :nth-of-type(2) {
    width: 40%;
  }
`;

const SubWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const SubAllCp = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <Wrap>
          <SubWrap>
            {data.map((v, i) => (
              <SubAllNaviCp data={v} key={i} />
            ))}
          </SubWrap>
          <div>
            <ImageCp maxWidth={true} src="/img/shop-banner1.jpg" className="mb-3" />
            <ImageCp maxWidth={true} src="/img/shop-banner2.jpg" />
          </div>
        </Wrap>
      </Container>
    </Wrapper>
  );
};

export default React.memo(SubAllCp);
