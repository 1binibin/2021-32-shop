import React, { useEffect } from 'react';
import styled, { Container } from '../style';
import { useDispatch } from 'react-redux';

import { getAllTree } from '../store/reducers/tree-slice';
import { getAllColor } from '../store/reducers/color-slice';
import { getAllSection } from '../store/reducers/section-slice';

import HeaderCp from '../components/header/HeaderCp';
import BannerWrapperCp from '../components/main/BannerWrapperCp';
import NoticeWrapperCp from '../components/main/NoticeWrapperCp';
import ParallaxCp from '../components/main/ParallaxCp';
import PrdWrapperCp from '../components/prd/PrdWrapperCp';

const Wrapper = styled(Container)`
  margin: auto;
  height: 10000px;
`;

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTree());
    dispatch(getAllColor());
    dispatch(getAllSection());
  }, [dispatch]);
  return (
    <Wrapper>
      <HeaderCp />
      <BannerWrapperCp />
      <NoticeWrapperCp />
      <ParallaxCp />
      <PrdWrapperCp />
    </Wrapper>
  );
};

export default React.memo(Main);
