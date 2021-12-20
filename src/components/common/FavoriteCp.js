import React, { useCallback, useState } from 'react';
import { FavoriteBorder } from '@mui/icons-material';
import styled, { color } from '../../style';

const Favorite = styled.div`
  display: inline-block;
  width: 2em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  font-size: ${(props) => props.size};
  border-radius: 50%;
  background-color: ${(props) => (props.like ? color.secondary : 'transparent')};
  color: ${(props) => props.color};
`;

const FavoriteCp = ({ size, className }) => {
  const [like, setLike] = useState(false);
  const [color, setColor] = useState('#222');
  // click DB 미구현
  const onClick = useCallback(
    (e) => {
      setLike(!like);
      setColor(color === '#222' ? '#f8f8f8' : '#222');
    },
    [like, color]
  );

  return (
    <Favorite
      className={className}
      size={size}
      onClick={onClick}
      like={like}
      color={color}
    >
      <FavoriteBorder />
    </Favorite>
  );
};

export default React.memo(FavoriteCp);
