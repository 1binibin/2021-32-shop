import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NaviWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  background-color: #eee;
  border-bottom: 1px solid #999;
  list-style: none;
`;

const Navi = styled(Link)`
  padding: 0.5em;
  display: inline-block;
`;

const TestNavi = () => {
  return (
    <NaviWrap>
      <li>
        <Navi to="/">Main</Navi>
      </li>
      <li>
        <Navi to="/login">Login</Navi>
      </li>
      <li>
        <Navi to="/cart?page=1">Cart</Navi>
      </li>
      <li>
        <Navi to="/info">My Info</Navi>
      </li>
      <li>
        <Navi to="/order">My Order</Navi>
      </li>
      <li>
        <Navi to="/withdrawal">My WithDrawal</Navi>
      </li>
      <li>
        <Navi to="/pay">Payment</Navi>
      </li>
      <li>
        <Navi to="/prd">Product List</Navi>
      </li>
      <li>
        <Navi to="/prd/1">Product View</Navi>
      </li>
    </NaviWrap>
  );
};

export default TestNavi;
