import React from 'react';
import styled, { color, Underline } from '../../style';

const Title = styled(Underline)`
  color: ${color.dark};
  font-size: 1.25em;
  line-height: 2em;
  font-weight: 400;
  &:hover {
    color: ${color.primary};
  }
`;

const TitleCp = ({ title }) => {
  return <Title color={color.primary}>{title}</Title>;
};

export default React.memo(TitleCp);
