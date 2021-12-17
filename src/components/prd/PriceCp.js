import React from 'react';
import numeral from 'numeral';
import styled, { color } from '../../style';

const Price = styled.div`
  color: ${color.black};
  font-size: 1em;
  line-height: 2em;
  font-weight: 500;
`;

const PriceCp = ({ price }) => {
  return <Price>${numeral(price).format()}</Price>;
};

export default React.memo(PriceCp);
