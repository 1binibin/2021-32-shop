import React from 'react';
import styled, { Underline, color } from '../../style';
import { Link } from 'react-router-dom';

const ListWrap = styled.li`
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  padding: 0.5em 0;
  text-align: center;
  font-weight: 500;
  display: block;
  &:hover {
    color: ${color.danger};
  }
`.withComponent(Link);

const List = styled.a`
  font-weight: 300;
  padding: 0.25em 0;
  text-align: center;
  display: block;
`
  .withComponent(Underline)
  .withComponent(Link);

const SubNavi = ({ data }) => {
  return (
    <ListWrap>
      <Title to="/">{data.title}</Title>
      {data.children.map((v, i) => (
        <List to="/" key={i} color={color.primary}>
          {v.title}
        </List>
      ))}
    </ListWrap>
  );
};

export default SubNavi;
