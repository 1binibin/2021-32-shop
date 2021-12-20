import React from 'react';
import { Link } from 'react-router-dom';
import styled, { Underline, color, AnimationWrapper } from '../../style';
import { useSelector } from 'react-redux';

const ListWrap = styled(AnimationWrapper)`
  font-size: 1rem;
  width: 60%;
  min-width: 240px;
  padding: 1.5em;
  position: absolute;
  top: 3em;
  left: 0;
  background-color: #ffffff;
`;

const Lists = styled.div``;

const List = styled.div`
  font-weight: 400;
  padding: 0.75em 0;
  display: block;
  color: ${color.primary};
  border-bottom: 1px solid #ccc;
`;

const TitleWrap = styled.div`
  padding: 1em;
`;

const LinkWrap = styled.a`
  display: inline-block;
`
  .withComponent(Underline)
  .withComponent(Link);

const SubMobileCp = () => {
  const { allTree } = useSelector((state) => state.tree);
  return (
    <ListWrap>
      {allTree.map((v, i) => (
        <Lists key={'p_' + i}>
          <TitleWrap>{v.title}</TitleWrap>
          {v.children.map((v2, i2) => (
            <List key={'c_' + i2}>
              <LinkWrap to="/" color={color.primary}>
                {v2.title}
              </LinkWrap>
            </List>
          ))}
        </Lists>
      ))}
    </ListWrap>
  );
};

export default React.memo(SubMobileCp);
