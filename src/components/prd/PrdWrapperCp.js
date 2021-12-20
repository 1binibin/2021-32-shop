import React from 'react';
import styled, { media } from '../../style';

import withPrdWrapper from './withPrdWrapper';
import PrdCp from './PrdCp';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 1em;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 101%;
  @media ${media.md} {
    width: 101.5%;
  }
  @media ${media.sm} {
    width: 102%;
  }
  @media ${media.xs} {
    width: 102.5%;
  }
`;

const PrdWrapperCp = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <Wrap>
        {props.prd.map((v, i) => (
          <PrdCp {...v} key={i} isList={true} />
        ))}
      </Wrap>
    </Wrapper>
  );
};

export default withPrdWrapper(React.memo(PrdWrapperCp));
