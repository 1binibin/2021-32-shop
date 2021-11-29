import React from 'react';

import styled, { Container, SmallContainer, Underline } from '../../style';
import ImageCp from './../common/ImageCp';

const TitleLink = styled(Underline)`
  width: 120px;
`;

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #cccccc;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: burlywood;
`;

const Wrap = styled(SmallContainer)`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  display: flex;
  > :nth-child(1) {
    width: 60%;
  }
  > :nth-child(2) {
    width: 40%;
  }
`;

const SubAllCp = () => {
  return (
    <Wrapper>
      <Container>
        <Wrap>
          <div>
            <TitleLink color="red">TEST</TitleLink>
            <TitleLink color="green">TEST</TitleLink>
          </div>
          <div>
            <ImageCp maxWidth={true} src="/img/shop-banner1.jpg" className="mb-3" />
            <ImageCp maxWidth={true} src="/img/shop-banner2.jpg" />
          </div>
        </Wrap>
      </Container>
    </Wrapper>
  );
};

export default SubAllCp;
