import React from 'react';
import Slider from 'react-slick';
import withSnsWrapper from './withSnsWrapper';
import styled, { Container, color, font } from '../../style';

import InstaCp from './InstaCp';

const Wrapper = styled.section`
  margin: 5em 0;
  padding: 2em 0;
`;
const TitleWrap = styled.div`
  font-family: ${font.en};
  color: {color.dark}
  text-align: center;
  margin-bottom: 3em;
`;
const Title = styled.h2`
  font-size: 1.75em;
  font-weight: 500;
  margin-bottom: 0.5em;
`;
const SubTitle = styled.p`
  font-size: 0.875em;
`;

const InstaWrapperCp = ({ list, slideConfig }) => {
  return (
    <Wrapper>
      <Container>
        <TitleWrap>
          <Title>What Our Customers Say...</Title>
          <SubTitle>
            See what other people, prototype testers and supporters told about us.
          </SubTitle>
        </TitleWrap>
        <Slider {...slideConfig}>
          {list.map((v, i) => (
            <InstaCp {...v} key={i} />
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
};

export default withSnsWrapper(React.memo(InstaWrapperCp));
