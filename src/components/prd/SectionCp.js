import React from 'react';
import styled, { color } from '../../style';
import convert from 'color-convert';

const Wrapper = styled.div`
  color: ${(props) => (convert.hex.hsl(props.color)[2] > 50 ? '#000' : '#fff')};
  background-color: ${(props) => props.color};
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  font-size: 0.75em;
  margin-bottom: 0.25em;
  text-align: center;
`;

const SectionCp = ({ color, name }) => {
  return <Wrapper color={color}>{name}</Wrapper>;
};

export default React.memo(SectionCp);
