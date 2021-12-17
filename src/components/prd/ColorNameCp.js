import React from 'react';
import styled, { color } from '../../style';

const ColorName = styled.div`
  width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.code};
`;

const ColorNameCp = ({ name, code }) => {
  return <ColorName code={code}>{name}</ColorName>;
};

export default React.memo(ColorNameCp);
