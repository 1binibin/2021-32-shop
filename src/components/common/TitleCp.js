import React from 'react';
import { Link } from 'react-router-dom';
import styled, { color } from '../../style';

const Wrapper = styled.div`
  line-height: 1.75em;
  font-size: 1.125em;
  font-weight: 500;
  margin-bottom: 1em;
`;

const TitleCp = ({ txt, link }) => {
  return <Wrapper>{link ? <Link to={link}>{txt}</Link> : txt}</Wrapper>;
};

export default React.memo(TitleCp);
