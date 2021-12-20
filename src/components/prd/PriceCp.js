import React from 'react';
import numeral from 'numeral';
import styled, { color } from '../../style';

const Price = styled.div`
  color: ${color.black};
  font-size: ${(props) => props.size};
  line-height: 2em;
  font-weight: 500;
`;

const PriceCp = ({ price, size = '1em' }) => {
  return <Price size={size}>${numeral(price).format()}</Price>;
};

export default React.memo(PriceCp);
