import React, { useCallback } from 'react';
import styled, { color } from '../../style';

const ColorWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
`;

const Color = styled.li`
  width: 1.25em;
  height: 1.25em;
  border-radius: 50%;
  margin: 0 0.25em 0.5em 0;
  background-color: ${(props) => props.color};
`;

const ColorCp = ({ colors, listenClick }) => {
  const onClick = useCallback(
    (e) => {
      let { name, color, id } = e.target.attributes;
      listenClick(name.value, color.value, id.value);
    },
    [listenClick]
  );
  return (
    <ColorWrap>
      {colors.map((v, i) => (
        <Color color={v.code} name={v.name} key={i} id={i} onClick={onClick} />
      ))}
    </ColorWrap>
  );
};

export default React.memo(ColorCp);
