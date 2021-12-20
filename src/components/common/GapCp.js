import React from 'react';
import styled from '../../style';

const Wrapper = styled.div`
  height: ${(props) => props.height};
`;

const GapCp = ({ height = 0 }) => {
  return <Wrapper height={height}></Wrapper>;
};

export default React.memo(GapCp);
