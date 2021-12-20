import React from 'react';
import styled, { color } from '../../style';
import LogoCp from '../common/LogoCp';
import ContentCp from '../common/ContentCp';
import ContentUnderlineCp from '../common/ContentUnderlineCp';
import GapCp from '../common/GapCp';
import SnsWrapCp from './SnsWrapCp';

const Wrapper = styled.div``;

const ContactCp = () => {
  return (
    <Wrapper>
      <LogoCp type="W" />
      <GapCp height="2em" />
      <ContentCp txt="685 Market Street" />
      <ContentCp txt="San Francisco, CA 94105," />
      <ContentCp txt="United States" />
      <GapCp height="2em" />
      <ContentCp txt="Call us: 1.800.000.6690" />
      <ContentUnderlineCp txt="Email: support@halothemes.com" link="/" />
      <SnsWrapCp />
    </Wrapper>
  );
};

export default React.memo(ContactCp);
