import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import styled, { font, color, media } from '../../style';

const Wrapper = styled.section`
  width: 33.3333%;
  display: flex;
  align-items: center;
  padding: 4em;
  @media ${media.md} {
    width: 100%;
    padding: 1.5em 1em;
  }
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
  font-weight: bold;
  margin-bottom: 1em;
`;

const Desc = styled.h4`
  font-size: 1em;
  color: ${color.lightBlack};
  margin-bottom: 0.5em;
`;

const NoticeWrapperCp = ({ title, src, content, link, button }) => {
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

export default React.memo(NoticeWrapperCp);
