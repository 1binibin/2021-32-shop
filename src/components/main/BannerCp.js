import React from 'react';
import styled from '../../style';

const Wrapper = styled.div`
  position: relative;
`;

const Contents = styled.ul`
  border: 10px solid red;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 20%;
  left: 10%;
`;

const BannerCp = ({ title, price, content, link, file, pos }) => {
  return (
    <Wrapper>
      <Contents pos={pos}></Contents>
      <div>
        <img src={file} className="w100" alt={title} />
      </div>
    </Wrapper>
  );
};

export default BannerCp;
