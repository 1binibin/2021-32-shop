import React, { useEffect, useState } from 'react';
import styled, { media, font, color } from '../../style';

import SurfCp from './SurfCp';

const data = [
  {
    title: 'All Rounders',
    price: '$219.00',
    content: 'Quisquemos sodales suscipit tortor condimentum from',
    src: '/img/201206_0001.jpg',
    link: '/prd/6',
  },
  {
    title: 'Performances',
    price: '$219.00',
    content: 'Quisquemos sodales suscipit tortor condimentum from',
    src: '/img/201206_0002.jpg',
    link: '/prd/7',
  },
  {
    title: 'Longboards',
    price: '$219.00',
    content: 'Quisquemos sodales suscipit tortor condimentum from',
    src: '/img/201206_0003.jpg',
    link: '/prd/8',
  },
  {
    title: 'Retro Surfboards',
    price: '$219.00',
    content: 'Quisquemos sodales suscipit tortor condimentum from',
    src: '/img/201206_0004.jpg',
    link: '/prd/9',
  },
];

const SurfWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 101%;
  @media ${media.md} {
    width: 101.5%;
  }
  @media ${media.sm} {
    width: 102%;
  }
  @media ${media.xs} {
    width: 102.5%;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 500;
  font-family: ${font.en};
  margin: 3em 0 2em 0;
  text-align: center;
`;

const SurfWrapperCp = () => {
  const [surf, setSurf] = useState([]);

  useEffect(() => {
    setSurf(data);
  }, []);

  return (
    <div>
      <Title>Featured Collections</Title>
      <SurfWrapper>
        {surf.map((v, i) => (
          <SurfCp {...v} key={i} />
        ))}
      </SurfWrapper>
    </div>
  );
};

export default React.memo(SurfWrapperCp);
