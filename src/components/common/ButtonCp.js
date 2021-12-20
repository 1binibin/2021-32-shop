import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '../../style';

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  display: inline-block;
  text-align: center;
  padding: 1em;
  border-radius: 5px;
  width: ${(props) => props.width};
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
  color = '#000',
  colorHover,
  bg = 'transparent',
  bgHover,
  border = '#000',
  borderHover,
  width = 'auto',
  size = '1em',
  bold = 'normal',
  className,
  onClick,
}) => {
  txtHover = txtHover || txt;
  colorHover = colorHover || color;
  bgHover = bgHover || bg;
  borderHover = borderHover || border;

  // const navigate = useNavigate();

  const onEnter = useCallback(
    (e) => {
      e.target.innerText = txtHover;
    },
    [txtHover]
  );

  const onLeave = useCallback(
    (e) => {
      e.target.innerText = txt;
    },
    [txt]
  );

  return (
    <Button
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      bg={bg}
      bgHover={bgHover}
      border={border}
      borderHover={borderHover}
      color={color}
      colorHover={colorHover}
      size={size}
      bold={bold}
      className={className}
      onClick={onClick}
    >
      {txt}
    </Button>
  );
};

export default React.memo(ButtonCp);
