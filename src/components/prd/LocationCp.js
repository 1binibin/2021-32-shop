import React from 'react';
import styled, { color, Underline } from '../../style';

const Location = styled(Underline)`
  color: ${color.lightBlack};
`;

const LocationCp = ({ location }) => {
  return <Location color={color.lightBlack}>{location}</Location>;
};

export default React.memo(LocationCp);
