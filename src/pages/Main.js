import React from 'react';
import styled, { Container, css } from '../style';

import HeaderCp from '../components/header/HeaderCp';
import BannerWrapperCp from '../components/main/BannerWrapperCp';
import NoticeWrapperCp from '../components/main/NoticeWrapperCp';
import ParallaxCp from '../components/main/ParallaxCp';
import CenterParallaxCp from '../components/main/CenterParallaxCp';
import PrdWrapperCp from '../components/prd/PrdWrapperCp';
import SurfWrapperCp from '../components/prd/SurfWrapperCp';
import RideWrapperCp from '../components/main/RideWrapperCp';
import InstaWrapperCp from '../components/main/InstaWrapperCp';
import FeaturedPrdWrapperCp from '../components/prd/FeaturedPrdWrapperCp';
import BrandCp from '../components/main/BrandCp';
import FooterWrapperCp from '../components/footer/FooterWrapperCp';

const Wrapper = styled.div`
  margin: auto;
`;

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <HeaderCp />
        <BannerWrapperCp id="241" />
        <NoticeWrapperCp />
        <ParallaxCp id="242" />
        <PrdWrapperCp title="New Products" button={true} buttonName="SHOW MORE" />
        <CenterParallaxCp id="243" />
        <SurfWrapperCp />
      </Container>
      <RideWrapperCp model="ride" id="244" />
      <Container>
        <InstaWrapperCp model="insta" id="245" />
        <FeaturedPrdWrapperCp title="Featured Products" />
      </Container>
      <BrandCp boardId="3" />
      <FooterWrapperCp />
    </Wrapper>
  );
};

export default React.memo(Main);
