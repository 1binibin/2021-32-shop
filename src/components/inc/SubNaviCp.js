import React from 'react';
import styled, { Underline, color } from '../../style';
import { Link } from 'react-router-dom';

const ListWrap = styled.li`
  width: 33.3333%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  padding: 0.5em 0;
  font-weight: 500;
  display: block;
  transition: all 0.5s;
  &:hover {
    color: ${color.danger};
  }
`.withComponent(Link);

const List = styled.a`
  font-weight: 400;
  padding: 0.25em 0;
  display: block;
`
  .withComponent(Underline)
  .withComponent(Link);

const SubNavi = ({ data }) => {
  return (
    <ListWrap>
      <Title to="/">{data.title}</Title>
      {data.children.map((v, i) => (
        <List to="/" key={i} color={color.lightBlack}>
          {v.title}
        </List>
      ))}
    </ListWrap>
  );
};

export default SubNavi;
