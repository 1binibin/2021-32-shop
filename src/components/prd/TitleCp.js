import React from 'react';
import styled, { color, Underline } from '../../style';

const Title = styled(Underline)`
  color: ${color.dark};
  font-size: 1.5em;
  line-height: 1em;
  font-weight: 400;
  margin: 0.5em 0;
  &:hover {
    color: ${color.primary};
  }
`;

const TitleCp = ({ title }) => {
  return <Title color={color.primary}>{title}</Title>;
};

export default React.memo(TitleCp);
