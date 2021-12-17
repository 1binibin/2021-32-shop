import React from 'react';
import styled, { color, Underline } from '../../style';

const Location = styled(Underline)`
  color: ${color.grey};
  font-size: 0.75em;
  line-height: 1.25em;
`;

const LocationCp = ({ title }) => {
  return <Location color={color.lightBlack}>{title}</Location>;
};

export default React.memo(LocationCp);
