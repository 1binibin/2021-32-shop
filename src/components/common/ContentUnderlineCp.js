import React from 'react';
import { Link } from 'react-router-dom';
import styled, { color, Underline } from '../../style';

const Wrapper = styled(Underline)`
  display: inline-block;
  line-height: 1.25em;
  margin-bottom: 0.5em;
`;

const ContentCp = ({ txt, link }) => {
  return (
    <Wrapper color="#fff">{link ? <Link to={link}>{txt}</Link> : { txt }}</Wrapper>
  );
};

export default React.memo(ContentCp);
