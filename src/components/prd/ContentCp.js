import React from 'react';
import styled, { color } from '../../style';

const Content = styled.div`
  color: ${color.black};
  font-size: ${(props) => props.size};
  line-height: 1.25em;
  font-weight: 500;
  margin: 1em 0;
`;

const ContentCp = ({ content, size = '1em' }) => {
  return <Content size={size}>${content}</Content>;
};

export default React.memo(ContentCp);
