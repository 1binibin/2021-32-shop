import React from 'react';
import styled, { color, Container, media } from '../../style';
import CardCp from './CardCp';

const Wrapper = styled.div`
  margin-top: 2em;
  background-color: #262626;
  padding: 3em 0 4em 0;
`;

const Wrap = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Copyright = styled.div`
  @media ${media.md} {
    width: 100%;
    margin-bottom: 2em;
  }
`;

const CopyrightCp = () => {
  return (
    <Wrapper>
      <Wrap>
        <Copyright>
          © 2021 Ella Demo. Powered by Shopify. Shopify Themes by HaloThemes.com
        </Copyright>
        <CardCp />
      </Wrap>
    </Wrapper>
  );
};

export default React.memo(CopyrightCp);
