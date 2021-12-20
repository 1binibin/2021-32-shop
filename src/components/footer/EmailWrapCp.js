import React from 'react';
import styled, { color } from '../../style';
import ContentCp from '../common/ContentCp';
import TitleCp from '../common/TitleCp';
import EmailCp from './EmailCp';

const Wrapper = styled.div``;

const EmailWrapCp = () => {
  return (
    <Wrapper>
      <TitleCp txt="Newsletter Sign Up" />
      <ContentCp txt="Receive our latest updates about our products and promotions." />
      <EmailCp />
    </Wrapper>
  );
};

export default React.memo(EmailWrapCp);
