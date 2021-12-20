import React from 'react';
import styled, { color, Container, media, font } from '../../style';
import ContactCp from './ContactCp';
import MenuWrapCp from './MenuWrapCp';
import EmailWrapCp from './EmailWrapCp';
import CopyrightCp from './CopyrightCp';

const Wrapper = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  font-family: ${font.en};
  padding-top: 4em;
`;

const Wrap = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  & > :nth-of-type(1) {
    width: 27.5%;
    @media ${media.lg} {
      width: 35%;
    }
    @media ${media.md} {
      width: 100%;
    }
  }
  & > :nth-of-type(2),
  & > :nth-of-type(3),
  & > :nth-of-type(4) {
    width: 15%;
    flex-grow: 1;
    @media ${media.md} {
      width: 100%;
    }
  }
  & > :nth-of-type(5) {
    width: 27.5%;
    @media ${media.lg} {
      width: 100%;
    }
  }
`;

const menus = [
  {
    title: 'Sort By',
    menu: [
      { title: 'Appliances', link: '/' },
      { title: 'Computers & Laptops', link: '/' },
      { title: 'Cameras', link: '/' },
      { title: 'Mobile Phones & Tablets', link: '/' },
      { title: 'Televisions', link: '/' },
      { title: 'Video Games & Systems', link: '/' },
      { title: 'Weekly Deals', link: '/' },
    ],
  },
  {
    title: 'Information',
    menu: [
      { title: 'About us', link: '/' },
      { title: 'Gift Certificates', link: '/' },
      { title: 'Theme Styles', link: '/' },
      { title: 'Contact us', link: '/' },
      { title: 'Blog', link: '/' },
      { title: 'Brands', link: '/' },
      { title: 'Sitemap', link: '/' },
    ],
  },
  {
    title: 'Customer Service',
    menu: [
      { title: 'Help & FAQs', link: '/' },
      { title: 'Terms of Conditions', link: '/' },
      { title: 'Privacy Policy', link: '/' },
      { title: 'Online Returns Policy', link: '/' },
      { title: 'Rewards Program', link: '/' },
      { title: 'Rebate Center', link: '/' },
      { title: 'Partners', link: '/' },
    ],
  },
];

const FooterWrapperCp = () => {
  return (
    <Wrapper>
      <Wrap>
        <ContactCp />
        <MenuWrapCp {...menus[0]} />
        <MenuWrapCp {...menus[1]} />
        <MenuWrapCp {...menus[2]} />
        <EmailWrapCp />
      </Wrap>
      <CopyrightCp />
    </Wrapper>
  );
};

export default React.memo(FooterWrapperCp);
