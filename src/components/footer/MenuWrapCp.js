import React from 'react';
import styled, { color } from '../../style';
import TitleCp from '../common/TitleCp';
import ContentUnderlineCp from '../common/ContentUnderlineCp';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuWrapCp = ({ title, menu }) => {
  return (
    <Wrapper>
      <TitleCp txt={title} />
      {menu.map((v, i) => (
        <ContentUnderlineCp txt={v.title} link={v.link} key={i} />
      ))}
    </Wrapper>
  );
};

export default React.memo(MenuWrapCp);
