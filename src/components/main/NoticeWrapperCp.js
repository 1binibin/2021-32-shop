import React from 'react';
import styled from '../../style';

import Home1 from '../../assets/img/home-service-1.png';
import Home2 from '../../assets/img/home-service-2.png';
import Home3 from '../../assets/img/home-service-3.png';
import NoticeCp from './NoticeCp';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
`;

const notice = [
  {
    src: Home1,
    title: 'Free Shipping & Returns*',
    content: 'Phasellus lorem malesuada ligula cosmopolis',
    link: '/board/1',
    button: 'Terms & Condition Applied',
  },
  {
    src: Home2,
    title: 'Longtime Warranty',
    content: 'Phasellus lorem malesuada ligula cosmopolis',
    link: '/board/2',
    button: 'Read more',
  },
  {
    src: Home3,
    title: 'Top Notch Customer Service',
    content: 'Phasellus lorem malesuada ligula cosmopolis',
    link: '/board/3',
    button: 'Learn how',
  },
];

const NoticeWrapperCp = () => {
  return (
    <Wrapper>
      {notice.map((v, i) => (
        <NoticeCp {...notice[i]} key={i} />
      ))}
    </Wrapper>
  );
};

export default React.memo(NoticeWrapperCp);
