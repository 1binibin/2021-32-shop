import React from 'react';
import { Link } from 'react-router-dom';
import styled, { Underline, color, AnimationWrapper } from '../../style';

const ListWrap = styled(AnimationWrapper)`
  min-width: 240px;
  padding: 1.5em;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

const List = styled.div`
  font-weight: 400;
  padding: 0.75em 0;
  display: block;
  color: ${color.primary};
  border-bottom: 1px solid #ccc;
`;
const LinkWrap = styled.a`
  display: inline-block;
`
  .withComponent(Underline)
  .withComponent(Link);

const SubCp = ({ data }) => {
  return (
    <ListWrap>
      {data.map((v, i) => (
        <List key={i}>
          <LinkWrap to="/" color={color.primary}>
            {v.title}
          </LinkWrap>
        </List>
      ))}
    </ListWrap>
  );
};

export default React.memo(SubCp);
