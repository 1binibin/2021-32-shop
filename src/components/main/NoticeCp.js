import React from 'react';
import styled, { font, color } from '../../style';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';

const Wrapper = styled.section`
  width: 33.3333%;
  display: flex;
  align-items: center;
  padding: 4em;
`;

const Img = styled.div`
  width: 50px;
  margin-right: 30px;
  & img {
    width: 100%;
  }
`;

const Content = styled.div`
  font-family: ${font.en};
`;

const Title = styled.h4`
  font-size: 1.25em;
  margin-bottom: 1em;
`;

const Desc = styled.h4`
  font-size: 1em;
  color: ${color.lightBlack};
  margin-bottom: 1em;
`;

const NoticeCp = ({ title, src, content, link, button }) => {
  return (
    <Wrapper>
      <Img>
        <img src={src} alt={title} />
      </Img>
      <Content>
        <Title>{title}</Title>
        <Desc>{content}</Desc>
        <Button to={link} component={Link}>
          {button}
        </Button>
      </Content>
    </Wrapper>
  );
};

export default React.memo(NoticeCp);
