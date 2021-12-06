import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../style';

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 1em;
  border-radius: 5px;
  width: ${(props) => props.w};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.border};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.bold};
  transition: all 0.5s;
  &:hover {
    color: ${(props) => props.colorHover};
    background-color: ${(props) => props.bgHover};
    border-color: ${(props) => props.borderHover};
  }
`;

const ButtonCp = ({
  txt = 'button',
  txtHover,
  link,
  color = '#000',
  colorHover,
  bg = 'transparent',
  bgHover,
  border = '#000',
  borderHover,
  w = 'auto',
  size = '1em',
  bold = 'normal',
}) => {
  txtHover = txtHover || txt;
  colorHover = colorHover || color;
  bgHover = bgHover || bg;
  borderHover = borderHover || border;
  return (
    <Button
      bg={bg}
      bgHover={bgHover}
      border={border}
      borderHover={borderHover}
      w={w}
      color={color}
      colorHover={colorHover}
      size={size}
      bold={bold}
    >
      {link ? <Link to={link}>{txt}</Link> : txt}
    </Button>
  );
};

export default React.memo(ButtonCp);
